import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: theme.colors.secondary,
        // tabBarInactiveTintColor: theme.colors.text,
        // tabBarLabelPosition: 'beside-icon',
        // tabBarStyle: {
        //     height: 55,
        //     paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        // }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
