import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const SearchBarComponent = (props: any) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search contacts"
        placeholderTextColor="#888"
        onChangeText={props.onChangetext}
      />
      <Image
        source={require('../assets/search.png')}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: '3%',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontWeight: 'normal',
    fontSize: 18,
  },
});

export default SearchBarComponent;
