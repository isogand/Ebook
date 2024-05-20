import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import Onboarding from "../Authentication/Onboarding/Onboarding";

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
    OutfitIdeas: undefined;
    FavoriteOutfits: undefined;
    TransactionHistory: undefined;
    EditProfile: undefined;
    Settings: undefined;
    Cart: undefined;
};
