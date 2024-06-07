// src/screens/BaseLoginForm.tsx
import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Box, makeStyles, palette, Text, Theme} from '../../../../Constants/Theme';
import Icon from 'react-native-vector-icons/AntDesign';
import ProgressBar from "../ProgressBar";
import {Button} from "../../../../components/Button";
import {levelData} from "../../../../Constants/data/onboardingData";
import {AuthNavigationProps} from "../../../../components/Navigation";

type BaseLoginFormProps = {};

// The BaseLoginForm component with navigation and route props
function BaseLoginForm({navigation, route}: BaseLoginFormProps & AuthNavigationProps<"BaseLoginForm">) {
    const styles = useStyles();
    const [level, setLevel] = useState(1); // Current level state

    // Define progress values corresponding to each level
    const progressValues = [0.2, 0.4, 0.6, 0.8, 1];
    const progress = progressValues[level - 1]; // Get progress based on the current level

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
    const CurrentComponent = levelData[level - 1].Component;

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Section */}
            <Box style={styles.header}>
                {/* Back Button */}
                <TouchableOpacity style={{padding: 10}} onPress={handlePreviousLevel}>
                    <Icon name='left' size={18} color='black'/>
                </TouchableOpacity>

                {/* Progress Bar */}
                <ProgressBar progress={progress}/>

                {/* Placeholder for future use */}
                <TouchableOpacity style={{padding: 20}}/>
            </Box>

            {/* Display the current question */}
            <Box style={styles.script}>
                <Text variant='hero' style={styles.text}>{levelData[level - 1].title}</Text>
                <Text mt='m' variant='title7' style={styles.text}>{levelData[level - 1].description}</Text>
                {/*QuestionDisplay*/}
                <CurrentComponent/>
            </Box>

            {/* Next Level Button */}
            <Box style={styles.buttonContainer}>
                <Button
                    title="Continue"
                    onPress={handleNextLevel}
                    width={'90%'}
                    height={'80%'}
                    borderRadius={100}
                    textStyle={{fontFamily: 'Arial'}}
                    backgroundColor={palette.blue}
                    style={{marginVertical: '3%'}}
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
        flex: 5,
        borderBottomWidth: 1,
        borderBottomColor: palette.input,
        alignItems: 'flex-start',
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'center',
    },
    text: {
        width: '100%',
        textAlign: 'left',
    }
}));

export default BaseLoginForm;
