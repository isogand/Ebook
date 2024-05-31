import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes> {
    navigation: StackNavigationProp<AuthRoutes, RouteName>;
    route: RouteProp<AuthRoutes, RouteName>;
}

export type HomeNavigationProps<RouteName extends keyof HomeRoutes> = {
    navigation: StackNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
};

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
};
export type AuthRoutes = {
    WelcomeScreen: undefined;
    Onboarding:undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    PasswordChanged: undefined;
};
export type HomeRoutes = {
    HomeScreen: undefined;
};
