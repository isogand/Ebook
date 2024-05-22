import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Dimensions} from "react-native";
import {makeStyles, palette, Text} from "../Constants/Theme";
import {Button} from "../components/Button";
import {useSelector} from "react-redux";

type Props = {
    route: RouteProp<ParamListBase, string>;
    navigation: NativeStackNavigationProp<ParamListBase, string>;
};

const {height, width} = Dimensions.get('window');
const HomeScreen = () => {
    const styles = useStyles();
    const { user, isAuthenticated } = useSelector((state: any) => state.authReducer);

    return (
        <>
            <Text>{user?.displayName}</Text>
        </>
    )
};
const useStyles = makeStyles((theme) => ({}));
export default HomeScreen;
