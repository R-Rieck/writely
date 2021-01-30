import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/components/navigationStyles";

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNavigationContainer}>
      <View style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </View>
      <View style={styles.iconContainer}>
        <View>
          <Image style={styles.icon} source={require("../../assets/homeicon.png")} />
        </View>

        <View>
        <Image style={styles.icon} source={require("../../assets/songicon.png")} />
        </View>
      </View>
    </View>
  );
};

export default BottomNavigation;
