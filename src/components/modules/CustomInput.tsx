import React, {forwardRef, useEffect, useState} from "react";
import {StyleSheet, Text, TextInput, View, ViewProps,} from "react-native";
import {SGFormCustomInputProps} from "./Form/Form";
import {useSelector} from "react-redux";
import {palette} from "../../Constants/Theme";

type Props = {
    toUpperCase?: boolean;
    textInputProps: React.ComponentProps<typeof TextInput> &
        SGFormCustomInputProps;
    containerStyle?: ViewProps["style"];
    style?: ViewProps["style"]; // from withSpecialProps
    placeholder?: string;
    editable?:boolean;
    placeholderTextColor?: string;
    iconColor?: string;
    variant?: "default" | "primary" | "special";
    keyboardType?: string | any ;
    label?:string;
    secureTextEntry?:boolean;
};

const CustomInput = forwardRef((props: Props, ref: any) => {
    const {
        value,
        error,
        touched,
        placeholder,
        placeholderTextColor,
        iconColor,
        variant,
        keyboardType
    } = props.textInputProps;
    const [isFocused, setIsFocused] = useState(false);
    const {theme,isDarkMode} = useSelector((state: any) => state.themeReducer);
    const [hack, setHack] = useState(0);

    const borderColor = touched ? (error ? "red" : "green") : "#D4D4D4";
    const textAlign = props.variant === 'primary' ? 'right' : 'left';
    const textAlignTitle = props.variant === 'primary' ? 'left' : 'right';

    useEffect(() => {
        setTimeout(() => {
            setHack(1);
        }, 500);
    }, []);

    return (

        <View style={styles.inputView}>
            <Text style={[styles.label]}>{props.label}</Text>

            <View style={[styles.inputContainer, {borderColor}]}>
                <TextInput
                    key={hack}
                    ref={ref}
                    {...props.textInputProps }
                    onChangeText={(text) => {
                        if (props.toUpperCase) {
                            props.textInputProps.setFieldValue(text.toUpperCase());
                        } else {
                            props.textInputProps.setFieldValue(text);
                        }
                    }}
                    value={value}
                    editable={props.editable}
                    placeholder={props.placeholder}
                    placeholderTextColor={isDarkMode? 'white' : palette.blue}
                    error={!!(touched && error)}
                    style={[styles.textInput, props.style, {borderColor: borderColor}]}
                    keyboardType={props.keyboardType}
                    secureTextEntry={props.secureTextEntry}
                    multiline={false}
                />
            </View>


            {touched && error && <Text value={error} style={styles.error}>{error}</Text>}
        </View>
    );
});

export default CustomInput;

const styles = StyleSheet.create({
    label: {
        marginBottom: 10,
        fontFamily:'Vazirmatn-Medium',
        width:'100%',
    },
    inputContainer: {
        flexDirection: 'row',
        fontSize: 16,
        paddingHorizontal: 20,
        height: 65,
        borderBottomWidth: 1,
        borderBottomColor: palette.lightgray,
    },
    textInput: {
        // marginHorizontal:15
        fontFamily:'Vazirmatn-Medium',
        width:'100%',
    },
    error: {
        marginTop: 5,
        fontSize: 12,
        color: "red",
        textAlign:'left',
        fontFamily:'Vazirmatn-Medium',
    },
    inputView:{
        width:'auto',
        height:'auto',
    },
    inputItem:{
        width:'100%',
        height:45,
        borderBottomWidth:0.7,
        paddingHorizontal:15,
        fontFamily:'Vazirmatn-Regular',
        borderRadius:10
    },
});
