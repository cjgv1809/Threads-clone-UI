import { useContext, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  useColorScheme,
} from "react-native";
import Lottie from "lottie-react-native";
import { View } from "../../components/Themed";
import { ThreadsContext } from "../../context/threadContext";
import ThreadsItem from "../../components/ThreadsItem";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const threads = useContext(ThreadsContext);
  const currentTheme = useColorScheme();
  const backgroundColor = currentTheme === "dark" ? "#000" : "#fff";

  return (
    <SafeAreaView style={[{ backgroundColor }, styles.container]}>
      <ScrollView
        contentContainerStyle={styles.wrapper}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => animationRef.current?.play()}
            tintColor="transparent"
          />
        }
        showsVerticalScrollIndicator={false}
      >
        <Lottie
          source={require("../../assets/lottie/animation-threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
        <View style={styles.container}>
          {threads.map((thread) => (
            <ThreadsItem key={thread.id} thread={thread} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  wrapper: {
    padding: 20,
  },
});
