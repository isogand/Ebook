import {Image} from "react-native";
import {AuthNavigationProps} from "../../../components/Navigation";
import {Box, makeStyles} from "../../../Constants/Theme";
import React, {useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {useSelector} from "react-redux";

const WelcomeScreen = ({navigation,route}: AuthNavigationProps<"WelcomeScreen">) => {
    const styles = useStyles();
    const {isAuthenticated,user} = useSelector((state: any) => state.authReducer)

    useEffect(() => {
        if (isAuthenticated) {
            setTimeout(() => {
                navigation.navigate("Home");
            }, 3000);
        } else {
            setTimeout(() => {
                navigation.navigate("Onboarding");
            }, 3000);
        }
    }, [isAuthenticated, navigation]);

    return (
        <Box alignItems={'center'} justifyContent={'center'} flex={1} backgroundColor={"White"}>
            <StatusBar style="light"/>
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
