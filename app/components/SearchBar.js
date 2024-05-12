import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const SearchBar =()=>{
    return(
        <View style={styles.container}>
            <Ionicons name="search" size={24} color="grey" style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder= 'Search for news..' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 5,
        marginBottom:5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        paddingLeft: 90,
        justifyContent: 'center',
        paddingRight: 5
    },
    searchInput: {
        flex: 1,
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
    }
});

export default SearchBar;