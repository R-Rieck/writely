import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/pages/home/index";
import BottomNavigation from "./src/components/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddSnippet from "./src/pages/add";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen
              name="Snippet"
              component={AddSnippet}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      <BottomNavigation />
      <StatusBar style="dark" animated={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#181A1B",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 10,
  },
});
