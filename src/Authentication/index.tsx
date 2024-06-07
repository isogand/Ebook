import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoutes} from '../components/Navigation';
import WelcomeScreen from "./SplashScreen/WelcomeScreen";
import Onboarding from "./Onboarding/Onboarding";
import BaseLoginForm from "./SignInButtons/LoginForm/components/BaseLoginForm";


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
            <AuthenticationStack.Screen
                name="BaseLoginForm"
                component={BaseLoginForm}
            />
        </AuthenticationStack.Navigator>
    )
}
