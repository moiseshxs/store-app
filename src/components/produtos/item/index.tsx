import { Pressable, View, Text } from 'react-native';
import { MarcasProps } from '..';

export function ProdutoItem({ item }: {item: MarcasProps}) {
 return (
   <Pressable className='w-1/2 bg-red-400'>
    <Text>{item.name}</Text>
   </Pressable>
  );
}