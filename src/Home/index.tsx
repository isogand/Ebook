import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRoutes} from '../components/Navigation';
import HomeScreen from "./HomeScreen";

const HomeStack = createStackNavigator<HomeRoutes>();

export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </HomeStack.Navigator>
    )
}
