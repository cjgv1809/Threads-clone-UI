import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Ionicons, Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";

const BottomIcons = () => {
  const currentTheme = useColorScheme();
  const iconColor = currentTheme === "dark" ? "white" : "black";

  return (
    <View style={styles.iconsContainer}>
      <FontAwesome name="heart-o" size={24} color={iconColor} />
      <Ionicons name="chatbubble-outline" size={24} color={iconColor} />
      <AntDesign name="retweet" size={24} color={iconColor} />
      <Feather name="send" size={24} color={iconColor} />
    </View>
  );
};

export default BottomIcons;

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
