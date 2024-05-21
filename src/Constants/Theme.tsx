
// Any project using this library should have a global theme object which
// specifies a set of values for spacing, colors, breakpoints, and more
// website https://shopify.github.io/restyle/

import React, { ReactNode } from "react";
import { ViewStyle, TextStyle, ImageStyle} from "react-native";
import {
    createTheme,
    createText,
    createBox,
    useTheme as useReTheme,
    ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";

export const palette = {
    white: '#FFFFFF',
    input:'#EBEBEB',
    silver:'#C0C0C0',
    lightgray:'#BDBDBD',
    darkgray:'#828282',
    gray:'#7E7E7E',
    textlt:'#4F4F4F',
    yellow: '#ffee00',
    gold:'#D4AF37',
    bronze:'#CD7F32',
    primaryRed:'#EB5757',
    red: '#d32127',
    light_red: '#da5f63',
    lightgreen: '#CCE7D7',
    green: '#27AE60',
    lightblue:'rgba(129,194,222,0.24)',
    blue: '#81C2DE',
    midnightBlue: '#2A2E4B',
    textbk:'#282828',
    black:'#000000',
    transparent: 'transparent',
    Secondary1:'#2A2E4B',
};

const theme = createTheme({
    colors: {
        White: palette.white,
        Black: palette.black,
        Secondary:palette.midnightBlue,
        Info:palette.blue,
        Primary:palette.red,
        PrimaryLight:palette.light_red,
        Error:palette.primaryRed,
        Success:palette.green,
        SuccessLight:palette.lightgreen,
        Warning:palette.yellow,
        TextBK:palette.textbk,
        TextLt:palette.textlt,
        Neutralgray:palette.darkgray,
        Background:palette.lightgray,
        Silver:palette.silver,
        Gold:palette.gold,
        Bronze:palette.bronze,
        Input:palette.input,
        Transparent: palette.transparent,
        Gray: palette.gray,
    },

    spacing: {
        s: 4,
        sm:8,
        m: 14,
        l: 29,
        xl: 36,
        xxl:90,
        '2xl':40 ,
        '3xl': 44,
        '4xl': 55,
        '5xl': 57,
        '6xl': 100,
        '7xl': 122,
        '8xl': 125,
        '9xl': 140,
        '10xl': 147,
        '11xl': 176,
        '12xl': 288,
        '13xl': 340,
        '14xl': 365,
        '15xl': 368,
        '16xl': 392,
    },
    borderRadii: {
        s: 4,
        sm:8,
        m: 14,
        l: 25,
        xl: 75,
        xxl:100
    },
    textVariants: {
        variant:{},
        defaults: {},
        hero: {
            fontFamily: "Vazirmatn-Bold",
            fontSize: 30,
            lineHeight: 30,
            color:'Black',
            textAlign: "center",
        },
        title1: {
            fontSize: 10,
            fontFamily:'Vazirmatn-Regular',
            color:'TextBK'
        },
        title2: {
            fontSize: 10,
            fontFamily:'Vazirmatn-Medium',
            color:'TextBK'
        },
        title3: {
            fontFamily:'Vazirmatn-Bold',
            fontSize: 12,
            color:'TextBK'
        },
        title4: {
            fontFamily:'Vazirmatn-SemiBold',
            fontSize: 12,
            color:'TextBK'
            // lineHeight: 30,
        },
        title5: {
            fontFamily:'Vazirmatn-Medium',
            fontSize: 12,
            color:'TextBK'
        },
        title6: {
            fontSize: 15,
            fontFamily:'Vazirmatn-Bold',
            color:'TextBK'
        },
        title7: {
            fontSize: 18,
            fontFamily:'Vazirmatn-Bold',
            color:'Input'
        },
        title8: {
            fontSize: 12,
            fontFamily:'Vazirmatn-Bold',
            color:'Primary'
        },
        title9: {
            fontSize: 18,
            fontFamily:'Vazirmatn-Bold',
            color:'TextBK'
        },
        title10: {
            fontSize: 14,
            fontFamily:'Vazirmatn-Bold',
            color:'Primary'
        },
        title11: {
            fontSize: 16,
            fontFamily:'Vazirmatn-Bold',
            color:'Success'
        },
        title12: {
            fontSize: 14,
            fontFamily:'Vazirmatn-Bold',
            color:'TextBK'
        },
        title13: {
            fontSize: 13,
            fontFamily:'Vazirmatn-Medium',
            color:'TextBK'
        },
        body: {
            fontFamily:'Vazirmatn-Thin',
            fontSize: 14,
            color:'Neutralgray'

        },
        button: {
            fontFamily:'Vazirmatn-Medium',
            fontSize: 18,
        },
        header: {
            fontSize: 12,
            lineHeight: 24,
            fontFamily:'Vazirmatn-Regular',

        },
    },
    breakpoints: {
        phone: 0,
        longPhone: {
            width: 0,
            height: 812,
        },
        tablet: 768,
        largeTablet: 1024,
    },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
    <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);
export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};
