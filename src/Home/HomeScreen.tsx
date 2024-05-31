import React from 'react';
import {Box, makeStyles, palette, Text} from "../Constants/Theme";
import {useDispatch, useSelector} from "react-redux";
import {HomeNavigationProps} from "../components/Navigation";
import {Image} from "react-native";
import {auth} from "../../firebaseConfig";


const HomeScreen = ({ navigation ,route }: HomeNavigationProps<"HomeScreen">) => {
    const styles = useStyles();
    const { user, isAuthenticated } = useSelector((state: any) => state.authReducer);
    const dispatch = useDispatch()

    return (
        <Box alignItems={'center'} justifyContent={'center'} flex={1}>
            <Text variant={'title9'}>{user?.displayName}</Text>
            <Image
                source={{
                    uri: user?.photoURL,
                }}
                style={styles.photo}/>
            <Text p={'m'} variant={'title8'} onPress={async()=> {
                await auth.signOut();
                //dispatch(clearUserinfo());
                navigation.replace('Authentication')}
            }>LOGOUT</Text>
        </Box>
    )
};
const useStyles = makeStyles((theme) => ({
    photo:{
        width:70,
        height:70,
        backgroundColor:palette.gray,
        borderRadius:100
    }
}));
export default HomeScreen;
