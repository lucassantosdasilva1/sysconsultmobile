import "react-native-gesture-handler";
import React from "react";

import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

import theme from "./src/styles/theme";
import { Routes } from "./src/routes";
import { ProductProvider } from "./src/hooks/ProductContextAPI";

import { Loading } from "./src/components/Loading";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}> 
      <ProductProvider>
      	<Routes/>
        <StatusBar style="auto" />
      </ProductProvider>
    </ThemeProvider>
  );
}
