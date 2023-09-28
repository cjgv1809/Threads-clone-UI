import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { Image } from "expo-image";

const blurHash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const PostContent = ({
  content,
  image,
}: {
  content: string;
  image: string;
}) => {
  return (
    <View>
      <Text>{content}</Text>
      {image && (
        <Image
          source={image}
          style={styles.image}
          contentFit="cover"
          placeholder={blurHash}
          transition={200}
        />
      )}
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});
