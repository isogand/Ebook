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
import {slides} from "../../Constants/data/onboardingData";

const { width } = Dimensions.get("window");
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
const useStyles = makeStyles((theme: Theme) => ({
    containers: {
        paddingHorizontal: theme.spacing.m,
        [theme.breakpoints.tablet]: {
            paddingHorizontal: theme.spacing.l,
        },
    },
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
export default Onboarding;
