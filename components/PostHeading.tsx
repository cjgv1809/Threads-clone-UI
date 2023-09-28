import React from "react";
import { StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import { timeAgo } from "../utils/time-ago";

const PostHeading = ({
  name,
  createdAt,
  verified,
}: {
  name: string;
  createdAt: string;
  verified: boolean;
}) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        <Text style={styles.username}>{name}</Text>
        {verified && <AntDesign name="checkcircle" size={14} color="#60a5fa" />}
      </View>

      <View style={styles.container}>
        <Text style={styles.time}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={14} color="gray" />
      </View>
    </View>
  );
};

export default PostHeading;

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  username: {
    fontWeight: "700",
    marginRight: 1,
  },
  time: {
    color: "gray",
  },
});
