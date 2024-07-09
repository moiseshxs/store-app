import { Pressable, Text, View, ScrollView } from "react-native";
import PagerView from "react-native-pager-view";

export function Slider() {
  return (
    <View className="w-full h-52 rounded-xl my-3">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable className="w-full h-52 rounded-xl bg-purple-400 justify-center items-center"
          key="1"
          onPress={() => console.log("DESTAQUE 1")}>
          <Text>CACHORRO</Text>
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
