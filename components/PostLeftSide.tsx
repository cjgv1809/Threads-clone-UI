import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Image } from "expo-image";
import { Text, View } from "../components/Themed";

const blurHash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const PostLeftSide = ({ thread }: { thread: Thread }) => {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

  return (
    <View style={{ justifyContent: "space-between" }}>
      <Image
        source={thread.author.photo}
        style={styles.image}
        placeholder={blurHash}
        contentFit="cover"
        transition={200}
      />
      <View
        style={{
          borderWidth: 1,
          alignSelf: "center",
          borderColor: borderColor,
          flexGrow: 1,
        }}
      />
      <View
        style={{
          width: 20,
          alignItems: "center",
          alignSelf: "center",
          gap: 3,
        }}
      >
        {[...Array(3)].map((_, i) => (
          <Image
            key={i}
            source={thread.replies![i - 1]?.author.photo}
            style={{ width: i * 10, height: i * 10, borderRadius: 15 }}
            placeholder={blurHash}
            contentFit="cover"
            transition={200}
          />
        ))}
      </View>
    </View>
  );
};

export default PostLeftSide;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
