import {Dimensions, Image} from "react-native";
import {AuthNavigationProps} from "../../../components/Navigation";
import {Box, makeStyles, Text} from "../../../Constants/Theme";
import {Button} from "../../../components/Button";
import React from "react";
import {StatusBar} from "expo-status-bar";


const {height, width} = Dimensions.get('window');
const WelcomeScreen = ({navigation}: AuthNavigationProps<"WelcomeScreen">) => {
    const styles = useStyles();

    setTimeout(()=>{
        navigation.replace('Onboarding')
    },4000)
    return (
        <Box alignItems={'center'} justifyContent={'center'} flex={1} backgroundColor={"White"}>
            <StatusBar barStyle="light-content"/>
            <Image source={require('../../../../assets/ios/1024.png')} style={styles.image}/>

            <Image source={require('../../../../assets/welcomeImage/Gear@1x-0.2s-200px-200px.gif')}
                   style={styles.svg}/>
        </Box>
    );
};
const useStyles = makeStyles((theme) => ({
    image: {
        width: 300,
        height: 300
    },
    svg: {
        width: 80,
        height: 80,
        position:'absolute',
        bottom:'10%'
    }
}));
export default WelcomeScreen;
