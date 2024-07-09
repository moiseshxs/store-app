import { ScrollView, SafeAreaView, StatusBar, } from "react-native";
import { useNavigation } from "expo-router";
import React from 'react';
import { Header } from "../../components/header";
import { Slider } from "../../components/slider";
import { Marcas } from "../../components/marcas";
import { Section } from "../../components/section";
import { Produtos } from "../../components/produtos";
import { useEffect } from "react";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        className="px-5 bg-slate-100">
        <Header />

        <Slider />

        <Section
          name="Marcas"
          subName="Ver mais"
          action={() => navigation.navigate("+not-found")}
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
