import React from 'react';
import {makeStyles, palette, Theme} from "../../../Constants/Theme";
import {ActivityIndicator, Dimensions, View} from "react-native";
import GoogleSignIn from "./GoogleSignIn/index.native";
import {Button} from "../../../components/Button";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {GoogleAuthProvider, signInWithCredential} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {auth, YOUR_ANDROID_CLIENT_ID, YOUR_IOS_CLIENT_ID} from "../../../../firebaseConfig";
import {useDispatch, useSelector} from 'react-redux';
import {clearUserinfo, setUserinfo} from "../../../store/AuthSlice";
import firebase from "firebase/compat";
import {CommonActions} from "@react-navigation/native";

interface UserInfo {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    uid: string;
    providerId: string;
}
interface IconButtonProps {
    navigation: any;
}
const {height, width} = Dimensions.get('window');

WebBrowser.maybeCompleteAuthSession();

const IconButton = ({ navigation }: IconButtonProps) => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState<boolean>(false);
    const {isAuthenticated} = useSelector((state: any) => state.authReducer)

    const [request,response,promptAsync] = Google.useAuthRequest({
        iosClientId: YOUR_IOS_CLIENT_ID,
        androidClientId: YOUR_ANDROID_CLIENT_ID
    });
    const checkLocalUser = async () => {
        try {
            setLoading(true); // Start loading before AsyncStorage operation
            // const userJSON = await AsyncStorage.getItem("@user");
            // const userData = userJSON ? JSON.parse(userJSON) : null;
            // setUserInfo(userData);
        } catch (e:undefined | any) {
            console.error('Error retrieving user data:', e.message);
        } finally {
            setLoading(false); // Stop loading after AsyncStorage operation
        }
    };

    React.useEffect(()=> {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential).then(() => {
                navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
            }).catch(error => {
                console.error('Error signing in:', error);
            });
        } else if (response?.type === 'cancel' || response?.type === 'dismiss') {
            setLoading(false); // Stop loading when user cancels or dismisses
        }
    },[response]);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);
        // checkLocalUser();
        return () => unsubscribe();
    }, []);
    // Add this function wherever it fits in your code, perhaps within your component or Redux setup
    const handleAuthStateChanged = async (user: firebase.User | null) => {
        if (user) {
            try {
                const { displayName, email, photoURL, uid } = user;
                const providerId = 'google.com'; // Assuming you're using Google Sign-In
                const userInfo: UserInfo = { displayName, email, photoURL, uid, providerId };

                if (!isAuthenticated) {
                    dispatch(setUserinfo(userInfo));
                }
               await AsyncStorage.setItem('@user', JSON.stringify(userInfo));
            } catch (error) {
                console.error('Error storing user data:', error);
            }
        } else {
            try {
                dispatch(clearUserinfo());
               await AsyncStorage.removeItem('@user');
            } catch (error) {
                console.error('Error removing user data:', error);
            }
        }
    };

    if(loading) return (<ActivityIndicator size="large" color={palette.blue} />);
    return (
        <View style={styles.container}>
            <>
                <GoogleSignIn promptAsync={promptAsync}/>
                <Button
                    title="Get Started"
                    onPress={() => {true}}
                    width={width/1.1}
                    height={'23%'}
                    borderRadius={100}
                    textStyle={{ fontFamily: 'Arial' }}
                    backgroundColor={palette.blue}
                    style={{marginVertical:'3%'}}
                />
                <Button
                    title="I Already Have an Account"
                    onPress={() => {true}}
                    width={width/1.1}
                    height={'23%'}
                    borderRadius={100}
                    textStyle={{ fontFamily: 'Arial' ,color:palette.blue}}
                    backgroundColor={palette.lightblue}
                />
            </>
        </View>
    );
}

IconButton.displayName = 'IconButton';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: 1,
        alignItems:"center"
    },
}));
export default IconButton;
