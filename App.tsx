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
      <NavigationContainer>
        <View style={styles.navigationContainer}>
          <View style={styles.contentContainer}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: "Songs",
                  headerStyle: { ...headerStyle },
                  headerTintColor: "white",
                }}
              />
              <Stack.Screen name="Snippet" component={AddSnippet} />
            </Stack.Navigator>
          </View>
          <BottomNavigation />
        </View>
      </NavigationContainer>
      <StatusBar style="dark" animated={true} />
    </View>
  );
}

const headerStyle = {
  backgroundColor: "#2F3233"
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#181A1B",
    justifyContent: "center",
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: "#181A1B",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    flex: 10,
    backgroundColor: "#181A1B",
  },
});
