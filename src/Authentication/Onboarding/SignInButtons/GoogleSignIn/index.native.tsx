import React from 'react';
import {palette} from "../../../../Constants/Theme";
import {Dimensions} from "react-native";
import {Button} from "../../../../components/Button";

/**
 * Google Sign In method for iOS and android that returns identityToken.
 */
const {height, width} = Dimensions.get('window');


/**
 * Google Sign In button for iOS.
 */
function GoogleSignIn({promptAsync}) {
    return (
        <Button
            title="Continue with Google"
            onPress={()=> promptAsync()}
            width={width / 1.1}
            height={'23%'}
            borderRadius={100}
            textStyle={{fontFamily: 'Arial', color: palette.textbk, marginHorizontal: 20}}
            style={{
                borderWidth: 1,
                borderColor: palette.input
            }}
            iconName={'googleplus'}
            iconColor={palette.primaryRed}
            iconSize={30}
        />
    );
}

GoogleSignIn.displayName = 'GoogleSignIn';

export default GoogleSignIn;
