import React from 'react';
import {Dimensions, Image, ImageProps, StyleSheet, View} from 'react-native';
import {makeStyles, palette, Text, Theme} from '../../Constants/Theme';

const {height, width} = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
    title: string;
    right?: boolean;
    image: ImageProps
}

const Slide = ({ title, image, right }: SlideProps) => {
    const styles = useStyles();
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? '-90deg' : '90deg' }
    ];

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
        </View>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width,
    },
    image: {
        backgroundColor: theme.colors.White,
        width:'100%',
        height: '100%',
        borderRadius:theme.borderRadii.xl,
        borderWidth:15,
        borderColor:palette.white,
        marginTop:10
    },
}));
export default Slide;
