import {Blurhash} from "react-native-blurhash";
import {View} from "react-native";

type ViewProps = React.ComponentProps<typeof View>;
type BlurhashProps = React.ComponentProps<typeof Blurhash>;

// Combine props using intersection type
type CombinedProps = ViewProps & BlurhashProps;

const BlurHashView = (props: CombinedProps) => {
    return <Blurhash {...props}/>
}

export default BlurHashView;
