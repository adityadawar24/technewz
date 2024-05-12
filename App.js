import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./app/components/BottomTab";
import axios from "axios";

const API_KEY = "WlkT4BKcqqaMTsJcE1TPa3dA7nXOn4JxjcZS_hmee9Or2LkJ";
const NEWS_API_URL = `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}`;

export default function App() {
  
  const [news, setNews] = useState([]);

  useEffect(()=> {
    const fetchNews = async () => {
      try {
        const response = await axios.get(NEWS_API_URL);
        setNews(response.data.news);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  const openArticle = (url) => {
    Linking.openURL(url);
  };

  const renderHeader = () => (
    <TouchableOpacity onPress={() => openArticle(news[0]?.url)}>
      <View style={styles.newsCard}>
        <Image source={{ uri: news[0]?.image }} style={styles.newsImage} />
        <Text style={styles.newsHeadline}>{news[0]?.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <BottomTab renderHeader={renderHeader} data={news} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  newsCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  newsHeadline: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
  },
});