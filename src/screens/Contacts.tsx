import React, {useEffect, useState} from 'react';
import {listContacts} from '../networks/ContactsApi';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import ContactNameComponent from '../components/ContactNamesComponent';
import ScanCameraComponent from '../components/ScanCameraComponent';
import {getItem} from '../utils/Utils';
import Constants from '../utils/Constants';
import ShimmerComponent from '../components/ShimmerComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import {useNavigation} from '@react-navigation/native';

const ContactsScreen = () => {
  const [contactList, setContactList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const userData = (await getItem(Constants.USER_DATA)) ?? '{}';
          const userDataParsed = JSON.parse(userData);
          const userId = userDataParsed.user_id;
          const token = userDataParsed.token;
          const contacts = await listContacts({user_id: userId, token: token});
          const sortedData = contacts.contactResp.sort((a: any, b: any) =>
            a.contact_name.localeCompare(b.contact_name),
          );
          setContactList(sortedData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = contactList.filter(item =>
      item.contact_name.toLowerCase().includes(searchData.toLowerCase()),
    );
    setFilteredContacts(filteredData);
  }, [searchData, contactList]);

  const renderContactItem = ({item}) => (
    <ContactNameComponent
      iconColor={'#ADEF'}
      title1={item.contact_name[0]}
      title2={item.contact_name}
      card_id={item.card_id}
    />
  );

  const handleSearch = text => {
    setSearchData(text);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.contactHead}>Contacts</Text>
        <SearchBarComponent onChangeText={handleSearch} />
        <ShimmerComponent />
        <ShimmerComponent />
        <ShimmerComponent />
        <ShimmerComponent />
        <ScanCameraComponent />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.contactHead}>Contacts</Text>
      <SearchBarComponent onChangetext={handleSearch} />

      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={filteredContacts}
        renderItem={renderContactItem}
        keyExtractor={(item, index) => index.toString()}
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
    marginBottom: 0,
    width: '100%',
    height: '100%',
  },
  flatList: {
    height: '100%',
    width: '100%',
    marginBottom: '-20%',
  },
  contactHead: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ContactsScreen;
