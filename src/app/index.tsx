import { Text, View, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Header } from "../components/header";
import { Slider } from "../components/slider";
import { Marcas } from "../components/marcas";
import { Section } from "../components/section";
import { Produtos } from "../components/produtos";

export default function Index() {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView style={{ flex: 1 }} className="px-5">
        <Header />

        <Slider />

        <Section
        name="Marcas"
        subName="Ver mais"
        action={() => console.log("ver mais")}
        />
        <Marcas />
        
        <Section
        name="Queima de estoque"
        subName="Ver todos"
        action={() => console.log("ver mais 2")}
        />
        <Produtos />
        
      </ScrollView>
    </SafeAreaView>
  );
}
