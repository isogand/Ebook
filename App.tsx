import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "./src/components/Navigation";
import {AuthenticationNavigator} from "./src/Authentication";
import { ThemeProvider } from './src/Constants/Theme';


const fonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();
export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider>
                <SafeAreaProvider>
                    <AppStack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
                        {/*<AppStack.Screen name="Home" component={HomeNavigator} />*/}
                    </AppStack.Navigator>
                </SafeAreaProvider>
            </ThemeProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
