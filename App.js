import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import { NEWS_API_KEY } from "@env";

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${NEWS_API_KEY}`

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(URL)
      setArticles(res.data.articles)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />
        )}
        keyExtractor={(_item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
