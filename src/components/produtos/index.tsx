import { Pressable, View, Text } from 'react-native';
import { useEffect, useState } from "react";
import { ProdutoItem } from './item';

export interface MarcasProps {
    id: string;
    name: string;
  }

export function Produtos() {
    const [marcas, setMarcas] = useState<MarcasProps[]>([])

    useEffect(() => {
      async function getMarcas() {
        const response = await fetch("http://192.168.1.2:3000/marcas")
        const data = await response.json()
        setMarcas(data);
      }
      getMarcas();
    }, [])

    return (
        <View className='w-full flex-row'>
            {marcas.map( item => (
                <ProdutoItem item={item} key={item.id}/>
            ))}
        </View>
    );
}