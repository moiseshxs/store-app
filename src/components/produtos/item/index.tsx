import { Pressable, View, Text, Image } from 'react-native';
import { ProdutosProps } from '..';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';

export function ProdutoItem({ item }: { item: ProdutosProps }) {
  return (
    <Pressable className='bg-white border border-gray-300 h-64 my-2 rounded-xl' style={{ width: '48%' }} onPress={() => console.log("Produto:" + item.name)}>
      <View className='h-3/5 rounded-t-xl justify-center items-center bg-purple-500'>
        <Image
          source={{ uri: item.image }}
          className="w-full h-full object-fill rounded-t-xl"
        />
      </View>

      <View className='p-3 gap-3'>
        <View className='flex-row justify-between items-center'>
          <Text className='text-2xl text-gray-500 max-w-28' numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>

          <View className='flex-row justify-center items-center gap-1'>
            <Ionicons name="star" size={14} color={'orange'} />
            <Text className='text-xl font-bold'>{item.rating}</Text>
          </View>
        </View>

        <Text className='text-3xl font-bold'>R$ {item.price}</Text>
      </View>
    </Pressable>
  );
}