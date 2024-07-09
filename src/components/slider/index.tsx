import { Pressable, Text, View, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Slider() {
  return (
    <View className="w-full h-52 rounded-xl my-3">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable className="w-full h-52 rounded-xl bg-purple-400 justify-center items-center"
          key="1"
          onPress={() => console.log("DESTAQUE 1")}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg" }}
            className="w-full h-full object-cover rounded-xl"
          />
        </Pressable>

        <Pressable className="w-full h-52 rounded-xl bg-red-400 justify-center items-center"
          key="2"
          onPress={() => console.log("DESTAQUE 2")}>
          <Text>GATO</Text>
        </Pressable>
      </PagerView>
    </View>
  );
}
