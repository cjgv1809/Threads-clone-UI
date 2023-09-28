import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

const PostFooter = ({ replies, likes }: { replies: number; likes: number }) => {
  return (
    <Text style={styles.footerText}>
      {replies} replies {likes} likes
    </Text>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  footerText: {
    color: "gray",
  },
});
