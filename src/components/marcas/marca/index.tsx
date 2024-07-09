import { Pressable, View, Text } from 'react-native';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { MarcasProps } from '..';

export function MarcaHorizontal({ marca }: { marca: MarcasProps }) {
    return (
        <Pressable className="justify-center items-center" onPress={() => console.log("Item:" + marca.name)}>
            <View className="w-20 h-20 rounded-full bg-black justify-center items-center">
                <FontAwesome5 name="shopify" size={26} color="white" />
            </View>
            <Text className="text-xl font-bold">{marca.name}</Text>
        </Pressable>
    );
}