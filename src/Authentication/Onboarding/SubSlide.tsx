import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../Constants/Theme';

import { Button } from '../../components'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
        // backgroundColor:"green"
        marginTop:20
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 12,
        fontFamily: 'Arial'
    },
    description: {
        textAlign: "center",
    }
})

interface SubSlideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
    return (
        <View style={styles.container}>
            <Text variant="hero" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description}>{description}</Text>
        </View>
    );
}

export default SubSlide;
