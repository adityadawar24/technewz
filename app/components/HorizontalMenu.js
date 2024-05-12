import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MENU_ITEMS = [
  { id: '1', title: 'My Feed', icon: 'home' , color: '#4169E1' },
  { id: '2', title: 'All News', icon: 'globe', color: '#4169E1' },
  { id: '3', title: 'Trending', icon: 'trending-up', color: '#4169E1' },
  { id: '4', title: 'Bookmark', icon: 'bookmark', color: '#4169E1' },
];

const HorizontalMenu = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Ionicons name={item.icon} size={24} color="grey" />
      <Text style={styles.menuTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  menuTitle: {
    marginLeft: 5,
    fontSize: 12,
  },
});

export default HorizontalMenu;
