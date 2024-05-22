import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRoutes} from '../components/Navigation';
import HomeScreen from "./HomeScreen";

const AuthenticationStack = createStackNavigator<HomeRoutes>();
// export const assets = [...welcomeAssets];
export const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthenticationStack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </AuthenticationStack.Navigator>
    )
}
