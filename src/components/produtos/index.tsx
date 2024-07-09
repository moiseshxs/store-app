import { Pressable, View, Text } from 'react-native';
import { useEffect, useState } from "react";
import { ProdutoItem } from './item';

export interface ProdutosProps {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
    brand_id: string;
  }

export function Produtos() {
    const [produtos, setProdutos] = useState<ProdutosProps[]>([])

    useEffect(() => {
      async function getProdutos() {
        const response = await fetch("http://192.168.1.2:3000/produtos")
        const data = await response.json()
        setProdutos(data);
      }
      getProdutos();
    }, [])

    return (
        <View className='w-full flex flex-wrap flex-row justify-between'>
            {produtos.map( item => (
                <ProdutoItem item={item} key={item.id}/>
            ))}
        </View>
    );
}