import {Dimensions} from "react-native";
import {AuthNavigationProps} from "../../components/Navigation";
import {Text, Box, makeStyles} from "../../Constants/Theme";


const {height, width} = Dimensions.get('window');
const WelcomeScreen = ({ navigation }: AuthNavigationProps<"WelcomeScreen">) => {
    const styles = useStyles();
    return (
       <Box style={styles.co} alignItems={'center'} justifyContent={'center'} flex={1}>
           <Text>Welcome</Text>
       </Box>
    );
};
const useStyles = makeStyles((theme) => ({
    co:{

    }
}));
export default WelcomeScreen;
