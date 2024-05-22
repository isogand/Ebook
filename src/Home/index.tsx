import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoutes} from '../components/Navigation';
import WelcomeScreen from './Onboarding/SplashScreen/WelcomeScreen';
import Onboarding from "./Onboarding/Onboarding";

const AuthenticationStack = createStackNavigator<AuthRoutes>();
// export const assets = [...welcomeAssets];
export const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthenticationStack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
            />
            <AuthenticationStack.Screen
                name="Onboarding"
                component={Onboarding}
            />
        </AuthenticationStack.Navigator>
    )
}