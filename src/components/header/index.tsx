import { Pressable, Text, View } from "react-native";
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Stack, useNavigation } from "expo-router";
import { useEffect } from "react";

export function Header() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false})
  }, [navigation]);

  return (
    <View className="w-full flex-row justify-between items-center my-3">

      <Pressable className="h-10 justify-center items-center flex-row gap-2" 
      onPress={() => console.log("Logo")}>
      <FontAwesome5 name="shopify" size={26} color="black" />
      <Text className="text-2xl font-bold">Bazar</Text>
      </Pressable>

      <Pressable className="h-10 w-10 justify-center items-center" 
      onPress={() => navigation.navigate("cart")}>
        <Feather name="shopping-cart" size={26} color={'black'}/>
      </Pressable>
    </View>
  );
}
