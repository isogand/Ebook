import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    useDerivedValue,
    interpolateColor,
} from 'react-native-reanimated';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const animatedProgress = useSharedValue(0);

    React.useEffect(() => {
        animatedProgress.value = withTiming(progress);
    }, [progress]);

    const animatedStyle = useAnimatedStyle(() => ({
        width: `${animatedProgress.value * 100}%`,
    }));

    const backgroundColor = useDerivedValue(() => {
        return interpolateColor(
            animatedProgress.value,
            [0, 0.5, 1],
            ['red', 'yellow', 'orange']
        );
    });

    const backgroundAnimatedStyle = useAnimatedStyle(() => ({
        backgroundColor: backgroundColor.value,
    }));

    const handleLeftPress = () => {
        setProgress((prevProgress) => Math.max(prevProgress - 0.1, 0));
    };

    const handleRightPress = () => {
        setProgress((prevProgress) => Math.min(prevProgress + 0.1, 1));
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.backgroundRect, backgroundAnimatedStyle]} />
            <View style={styles.progressBar}>
                <Animated.View style={[styles.progress, animatedStyle]} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLeftPress}>
                    <Text style={styles.buttonText}>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleRightPress}>
                    <Text style={styles.buttonText}>Right</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundRect: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    progressBar: {
        height: 20,
        width: '80%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: 'green',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ProgressBar;
