import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SearchBarComponent from '../components/SearchBarComponent';
import ContactNameComponent from '../components/ContactNamesComponent';
import ScanCameraComponent from '../components/ScanCameraComponent';

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.contactHead}>Contacts</Text>
      <SearchBarComponent style={styles.search} />
      <ContactNameComponent
        iconColor="#AEFAAD"
        title1={'J'}
        title2={'Jayan M S'}
      />
      <ContactNameComponent
        iconColor="#FDF9A5"
        title1={'M'}
        title2={'Makoto Shinkai'}
      />
      <ContactNameComponent
        iconColor="#98D5F0"
        title1={'V'}
        title2={'Vijay R'}
      />
      <ContactNameComponent
        iconColor="#FFB775"
        title1={'R'}
        title2={'Rose Mathew'}
      />
      <ScanCameraComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    paddingTop: '15%',
    paddingBottom: '8%',
    backgroundColor: '#FFFF',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  contactHead: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  search: {
    // marginTop: 0,
    // marginBottom: '50%',
  },
});

export default ContactsScreen;
