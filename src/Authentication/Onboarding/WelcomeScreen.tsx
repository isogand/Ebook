import {Dimensions} from "react-native";
import {AuthNavigationProps} from "../../components/Navigation";
import {Box, makeStyles} from "../../Constants/Theme";
import {Button} from "../../components/Button";


const {height, width} = Dimensions.get('window');
const WelcomeScreen = ({ navigation }: AuthNavigationProps<"WelcomeScreen">) => {
    const styles = useStyles();
    return (
        <Box alignItems={'center'} justifyContent={'center'} flex={1}>

            <Button
                title="Press me"
                onPress={() => {navigation.navigate("Onboarding")}}
                width={200} // Optional: Specify width
                height={50} // Optional: Specify height
                borderRadius={10} // Optional: Specify border radius
                padding={10} // Optional: Specify padding
                variant="primary" // Optional: Specify variant
                disabled={false} // Optional: Specify disabled state
                svg={false} // Optional: Specify if SVG should be displayed
                startColor="#FF6347" // Optional: Specify gradient start color
                endColor="#FFA500" // Optional: Specify gradient end color
                showLoading={true} // Optional: Specify loading indicator visibility
                textStyle={{ fontFamily: 'Arial' }} // Optional: Specify text style
                backgroundColor={'red'}
            />
        </Box>
    );
};
const useStyles = makeStyles((theme) => ({

}));
export default WelcomeScreen;
