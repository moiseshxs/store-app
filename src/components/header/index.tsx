import { Pressable, Text, View } from "react-native";
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';

export function Header() {
  return (
    <View className="w-full flex-row justify-between py-3">
      <Pressable className="h-10 w-10 justify-center align-center" 
      onPress={() => console.log("Menu")}>
        <Ionicons name="menu" size={26} color={'black'}/>
      </Pressable>

      <Pressable className="h-10 w-10 justify-center align-center" 
      onPress={() => console.log("Logo")}>
      <FontAwesome5 name="shopify" size={26} color="black" />
      </Pressable>

      <Pressable className="h-10 w-10 justify-center align-center" 
      onPress={() => console.log("Carrinho")}>
        <Feather name="shopping-cart" size={26} color={'black'}/>
      </Pressable>
    </View>
  );
}
