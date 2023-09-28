import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import PostHeading from "./PostHeading";
import PostFooter from "./PostFooter";
import BottomIcons from "./BottomIcons";
import PostContent from "./PostContent";
import PostLeftSide from "./PostLeftSide";

const ThreadsItem = ({ thread }: { thread: Thread }) => {
  return (
    <View style={styles.container}>
      <PostLeftSide thread={thread} />
      <View style={styles.contentContainer}>
        <PostHeading
          name={thread.author.name}
          createdAt={thread.createdAt}
          verified={thread.author.verified}
        />
        <PostContent content={thread.content} image={thread.image!} />
        <BottomIcons />
        <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
      </View>
    </View>
  );
};

export default ThreadsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 30,
    gap: 6,
    backgroundColor: "transparent",
  },
  contentContainer: {
    gap: 6,
    flexShrink: 1,
  },
});
