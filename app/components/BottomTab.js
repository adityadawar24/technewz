import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import SavedScreen from './SavedScreen';
import ProfileScreen from './ProfileScreen';
import Screen from './Screen';
import NewsCard from './NewsCard';
import HorizontalMenu from './HorizontalMenu';
import { FlatList, StyleSheet, View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = ({ renderHeader, data }) => {
  const latestNews = data.slice(1, 6);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Saved') {
            iconName = 'bookmark';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#f7f3f3',
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home">
        {() => (
          <Screen>
            {/* <SearchBar /> */}
            {renderHeader()}
            <HorizontalMenu />
            <FlatList
              data={latestNews}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <NewsCard item={item} />}
              ListHeaderComponent={() => (
                <View style={styles.newsListHeader}>
                  <Text style={styles.newsListTitle}>Latest News</Text>
                </View>
              )}
            />
          </Screen>
        )}
      </Tab.Screen>
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  newsListHeader: {
    backgroundColor: '#e3e3e3',
    padding: 10,
    marginBottom: 10,
  },
  newsListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
  
export default BottomTab;
