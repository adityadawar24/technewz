import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking  } from 'react-native';

const NewsCard = ({ item }) => {
  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // };

  const openArticle =()=>{
    Linking.openURL(item.url);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openArticle}>
      <View style={styles.content}>
        <Text style={styles.headline}>{item.title}</Text>
        <Text style={styles.summary} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.meta}>
          <Text style={styles.source}>{item.author}</Text>
          {/* <Text style={styles.date}>{formatDate(item.published)}</Text> */}
        </View>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 75,
    borderRadius : 8,
    resizeMode: 'cover',
    marginTop: 12,
    marginRight : 5,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  headline: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  summary: {
    fontSize: 9,
    marginBottom: 5,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  source: {
    fontSize: 9,
    color: 'grey',
  },
  date: {
    fontSize: 12,
    color: 'grey',
  },
});

export default NewsCard;
