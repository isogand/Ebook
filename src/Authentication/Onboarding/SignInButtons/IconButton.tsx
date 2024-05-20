import React from 'react';
import {palette, Text} from "../../../Constants/Theme";
import {ActivityIndicator, Dimensions, View} from "react-native";
import {color} from "@shopify/restyle";
import GoogleSignIn from "./GoogleSignIn/index.native";
import {Button} from "../../../components/Button";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider,onAuthStateChanged,signInWithCredential} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {auth} from "../../../../firebaseConfig";

type IconButtonProps = {

};
const {height, width} = Dimensions.get('window');

WebBrowser.maybeCompleteAuthSession();
function IconButton({}: IconButtonProps) {

    const [userInfo,setUserInfo] = React.useState();
    const [loading,setLoading] = React.useState('false');
    const [request,response,promptAsync] = Google.useAuthRequest({
        iosClientId: '186934192169-uicr0hcvluvrdoko2al8g5rc1lssrs9v.apps.googleusercontent.com',
        androidClientId: '186934192169-2q12jalvtd4cqc210pmv3qgfce5h7e88.apps.googleusercontent.com'
    });

    const checkLocalUser = async () => {
        try {
          setLoading(true);
          const userJSON = await AsyncStorage.getItem("@user");
          const userData = userJSON ? JSON.parse(userJSON) : null;
        } catch(e:any) {
            alert(e.message);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(()=> {
        if (request?.type == "success") {
            const {id_token} = request.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    },[request]);

    React.useEffect(() => {
        checkLocalUser();
        const unsub = onAuthStateChanged(auth,async (user)=>{
            console.log('user', user);
            if (user) {
                console.log(JSON.stringify(user, null, 2));
                setUserInfo(user);
                await AsyncStorage.setItem("@user",JSON.stringify(user));
            } else {
                console.log("else");
                setUserInfo(null);
            }
        });

        return () => unsub();
    },[]);

    if(loading) return (<ActivityIndicator size="large" color={palette.blue} />);
    return (
        <View style={{flex:1,alignItems:"center"}}>
            {userInfo ? (
                <Button
                    title="Sign-Out"
                    onPress={async () => await signOut(auth)}
                    borderRadius={100}
                    textStyle={{ fontFamily: 'Arial',color:palette.red }}
                />
                ) : (
                <>
                    <GoogleSignIn promptAsync={promptAsync}/>
                    <Button
                        title="Get Started"
                        onPress={() => {true}}
                        width={width/1.1}
                        height={60}
                        borderRadius={100}
                        textStyle={{ fontFamily: 'Arial' }}
                        backgroundColor={palette.blue}
                        style={{marginVertical:15}}
                    />
                    <Button
                        title="I Already Have an Account"
                        onPress={() => {true}}
                        width={width/1.1}
                        height={60}
                        borderRadius={100}
                        textStyle={{ fontFamily: 'Arial' ,color:palette.blue}}
                        backgroundColor={palette.lightblue}
                    />
                </>
            )}
        </View>
    );
}

IconButton.displayName = 'IconButton';

export default IconButton;
