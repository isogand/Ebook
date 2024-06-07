import React from 'react';
import {Box, palette, size, Text} from '../../../Constants/Theme';
import {DataLevel1, DataLevel2, DataLevel3} from "../../../Constants/data/onboardingData";
import Icon from "react-native-vector-icons/FontAwesome";
import {Animated, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {Button} from "../../../components/Button";
import ScrollView = Animated.ScrollView;

const screenWidth = Dimensions.get('window').width;
export const Level1: React.FC = () => {

    const [selected, setSelected] = React.useState(null);

    return (
        <Box pt='m' width='100%'>
            {DataLevel1.map((level, index) => {

                const isSelected = selected === index;
                const isLast = index === DataLevel1.length - 1;
                return (
                    <React.Fragment key={index}>
                        <TouchableOpacity
                            style={{
                                borderBottomColor: palette.silver,
                                borderBottomWidth: isLast ? 0 : 1,
                                flexDirection: 'row',
                                alignItems:'center',
                                paddingVertical: size.l
                            }}
                            onPress={() => setSelected(index)}
                        >

                            <Icon
                                name={isSelected ? 'dot-circle-o' : 'circle-o'}
                                size={24}
                                color={isSelected ? palette.blue : palette.gray}
                            />

                            <Text marginHorizontal='l' variant='title7'>
                                {level.title}
                            </Text>

                        </TouchableOpacity>
                    </React.Fragment>
                );
            })}
        </Box>
    );
};


export const Level2: React.FC = () => {
    const [selected, setSelected] = React.useState<number | null>(null);

    return (
        <Box pt='m' width='100%' height='100%'>
            <FlatList
                data={DataLevel2}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                style={{ width: '100%' }}
                renderItem={({ item }) => {
                    const isSelected = selected === item.id;
                    return (
                        <Button
                            title={item.title}
                            onPress={() => setSelected(item.id)}
                            width={'45%'}
                            height={'80%'}
                            borderRadius={100}
                            backgroundColor={isSelected ? palette.blue : palette.white}
                            textStyle={{
                                fontFamily: 'Arial',
                                color: isSelected ? palette.white : palette.blue,
                                fontSize: 20,
                            }}
                            style={{
                                marginVertical: '6%',
                                borderWidth: 2,
                                borderColor: palette.blue,
                                marginHorizontal: '2.5%',
                            }}
                        />
                    );
                }}
            />

        </Box>
    );
};


export const Level3: React.FC = () => {
    const [selectedGenres, setSelectedGenres] = React.useState<number[]>([]);

    const toggleGenreSelection = (id: number) => {
        setSelectedGenres((prevSelectedGenres) =>
            prevSelectedGenres.includes(id)
                ? prevSelectedGenres.filter((genreId) => genreId !== id)
                : [...prevSelectedGenres, id]
        );
    };
    return (
        <Box pt='m' width='100%' height='100%'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {DataLevel3.map((item) => {
                        const isSelected = selectedGenres.includes(item.id);
                        return (
                            <Button
                                title={item.title}
                                onPress={() => toggleGenreSelection(item.id)}
                                height={'18%'}
                                borderRadius={25}
                                backgroundColor={isSelected ? palette.blue : palette.white}
                                textStyle={{
                                    fontFamily: 'Arial',
                                    color: isSelected ? palette.white : palette.blue,
                                    fontSize: 20,
                                }}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: 10,
                                    margin: 5,
                                    borderWidth: 2,
                                    borderColor: palette.blue,
                                }}
                            />
                        );
                    })}
                </Box>
            </ScrollView>
        </Box>
    );
};

export const Level4: React.FC = () => {
    return <Text>Content for Level 4</Text>;
};
export const Level5: React.FC = () => {
    return <Text>Content for Level 5</Text>;
};


