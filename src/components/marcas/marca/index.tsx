import { Pressable, View, Text, Image } from 'react-native';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { MarcasProps } from '..';

export function MarcaHorizontal({ marca }: { marca: MarcasProps }) {
    return (
        <Pressable className="justify-center items-center" onPress={() => console.log("Item:" + marca.name)}>
            <View className="w-20 h-20 rounded-full bg-black justify-center items-center">
                <Image 
                    source={{ uri: marca.logo}}
                    className="w-20 h-20 rounded-full object-fill"
                />
            </View>
            <Text className="text-xl font-bold">{marca.name}</Text>
        </Pressable>
    );
}