import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ListItem } from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/300/300"
        title=" Type Safe, Extensible, and Modular by design. Forget you are even using a store. Type
        Safe, Extensible, and Modular by design. Forget you are even using a store."
        author="React News"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
