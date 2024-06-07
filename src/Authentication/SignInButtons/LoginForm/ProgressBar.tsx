import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { makeStyles, palette } from '../../../Constants/Theme';

type ProgressBarProps = {
    progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const styles = useStyles();
    const animatedProgress = useSharedValue(progress);

    // Update the animated progress value whenever the progress changes
    React.useEffect(() => {
        animatedProgress.value = withTiming(progress);
    }, [progress]);

    // Define the animated style for the progress bar
    const animatedStyle = useAnimatedStyle(() => ({
        width: `${animatedProgress.value * 100}%`,
    }));

    return (
        <View style={styles.progressBar}>
            <Animated.View style={[styles.progress, animatedStyle]} />
        </View>
    );
};

// Define styles using makeStyles
const useStyles = makeStyles(() => ({
    progressBar: {
        height: 15,
        width: '60%',
        backgroundColor: palette.silver,
        borderRadius: 10,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: palette.blue,
    },
}));

export default ProgressBar;
