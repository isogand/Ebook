import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Box, makeStyles, palette, Text, Theme } from '../../../Constants/Theme';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import { AuthNavigationProps } from '../../../components/Navigation';
import {Button} from "../../../components/Button";

type BaseLoginFormProps = {};

function BaseLoginForm({ navigation, route }: BaseLoginFormProps & AuthNavigationProps<"BaseLoginForm">) {
    const styles = useStyles();
    const [level, setLevel] = useState(1); // Current level state
    const [questions, setQuestions] = useState([
        "Question 1 for Level 1",
        "Question 2 for Level 2",
        "Question 3 for Level 3",
        "Question 4 for Level 4",
        "Question 5 for Level 5",
    ]);

    // Define progress values corresponding to each level
    const progressValues = [0.2, 0.4, 0.6, 0.8, 1];
    const progress = progressValues[level - 1]; // Get progress based on the current level
    const animatedProgress = useSharedValue(progress);

    // Update the animated progress value whenever the progress changes
    useEffect(() => {
        animatedProgress.value = withTiming(progress);
    }, [progress]);

    // Define the animated style for the progress bar
    const animatedStyle = useAnimatedStyle(() => ({
        width: `${animatedProgress.value * 100}%`,
    }));

    // Handle the next level button click
    const handleNextLevel = () => {
        if (level < 5) {
            setLevel(level + 1);
        }
    };

    // Handle the previous level button click
    const handlePreviousLevel = () => {
        if (level > 1) {
            setLevel(level - 1);
        } else {
            navigation.goBack();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Section */}
            <Box style={styles.header}>
                {/* Back Button */}
                <TouchableOpacity style={{ padding: 10 }} onPress={handlePreviousLevel}>
                    <Icon name='left' size={18} color='black' />
                </TouchableOpacity>

                {/* Progress Bar */}
                <Box style={styles.progressBar}>
                    <Animated.View style={[styles.progress, animatedStyle]} />
                </Box>

                {/* Placeholder for future use */}
                <TouchableOpacity style={{ padding: 20 }} />
            </Box>

            {/* Display the current question */}
            <Box style={styles.script}>
                <Text>{questions[level - 1]}</Text>
            </Box>

            {/* Next Level Button */}
            <Box style={styles.buttonContainer}>
                <Button
                    title="Continue"
                    onPress={handleNextLevel}
                    width={'90%'}
                    height={'80%'}
                    borderRadius={100}
                    textStyle={{ fontFamily: 'Arial' }}
                    backgroundColor={palette.blue}
                    style={{marginVertical:'3%'}}
                />
            </Box>
        </SafeAreaView>
    );
}

// Define styles using makeStyles
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.5,
    },
    script: {
        backgroundColor: "purple",
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderButtonWidth:1
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'center',
    },
    progressBar: {
        height: 20,
        width: '70%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: palette.blue,
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
}));

export default BaseLoginForm;
