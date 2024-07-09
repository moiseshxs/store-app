import { Pressable, Text, View, FlatList } from "react-native";
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { MarcaHorizontal } from "./marca";

export interface MarcasProps {
  id: string;
  name: string;
  logo: string;
}

export function Marcas() {
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
    <View className="w-full flex-row justify-between py-3">
      <FlatList
        data={marcas}
        renderItem={({ item }) => <MarcaHorizontal marca={item}/>}
        horizontal={true}
        contentContainerStyle={{ gap: 14 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
