import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
    interpolateColor,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
} from "react-native-reanimated";
import { AuthNavigationProps } from "../../components/Navigation";
import { Theme, makeStyles, Text } from "../../Constants/Theme";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";
import {StatusBar} from "expo-status-bar";
import IconButton from "./SignInButtons/IconButton";

const { width } = Dimensions.get("window");
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.White,
    },
    slider: {
        height: SLIDE_HEIGHT/1.15,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        backgroundColor: theme.colors.White,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
}));

const slides = [
    {
        title: "Relaxed",
        subtitle: "Welcome to Ebook",
        description: "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
        image: require('../../../assets/welcomeImage/W1.png')
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it First",
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
        color: "#BEECC4",
        image: require('../../../assets/welcomeImage/W2.png')
    },
    {
        title: "Eccentric",
        subtitle: "Your Style, Your Way",
        description: "Create your individual & unique style and look amazing everyday",
        color: "#FFE4D9",
        image: require('../../../assets/welcomeImage/W3.png')
    },
];

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
    const styles = useStyles();
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset }) => {
            x.value = contentOffset.x;
        },
    });
    const backgroundColor = useDerivedValue(() =>
        interpolateColor(
            x.value,
            slides.map((_, i) => i * width),
            slides.map((slide) => slide.color)
        )
    );

    const currentIndex = useDerivedValue(() => x.value / width);
    const footerStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -x.value }],
    }));

    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <Animated.View style={[styles.slider]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                >
                    {slides.map(({ title,image }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title ,image}} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <View>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot key={index} currentIndex={currentIndex} {...{ index }} />
                        ))}
                    </View>
                    <Animated.View
                        style={[
                            {
                                flexDirection: "row",
                                width: width * slides.length ,
                            },
                            footerStyle,
                        ]}
                    >
                        {slides.map(({ subtitle, description }, index) => {
                            const last = index === slides.length - 1;
                            return (
                                <SubSlide
                                    key={index}
                                    onPress={() => {
                                        if (last) {
                                            // navigation.navigate("Welcome");
                                        } else {
                                            scroll.current
                                                ?.getNode()
                                                .scrollTo({ x: width * (index + 1), animated: true });
                                        }
                                    }}
                                    {...{ subtitle, description, last }}
                                />
                            );
                        })}
                    </Animated.View>
                </View>
                <IconButton/>
            </View>
        </View>
    );
};

export default Onboarding;
