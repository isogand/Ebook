import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "./src/components/Navigation";
import {AuthenticationNavigator} from "./src/Authentication";
import {ThemeProvider} from './src/Constants/Theme';
import "react-native-gesture-handler";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { Provider } from 'react-redux';
import {persistor, store} from "./src/store";
import {PersistGate} from 'redux-persist/integration/react';

WebBrowser.maybeCompleteAuthSession();

const fonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <ThemeProvider>
                        <SafeAreaProvider>
                            <AppStack.Navigator
                                screenOptions={{
                                    headerShown: false,
                                }}
                            >
                                <AppStack.Screen name="Authentication" component={AuthenticationNavigator}/>
                                {/*<AppStack.Screen name="Home" component={HomeNavigator} />*/}
                            </AppStack.Navigator>
                        </SafeAreaProvider>
                    </ThemeProvider>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({});
