import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GroupComponent from '../components/GroupComponent';
import ScanCameraComponent from '../components/ScanCameraComponent';
const GroupsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.groupsHead}>Groups</Text>
      <GroupComponent
        title={'Mistubishi Motors'}
        bgColor="#FF6767"
        noOfContacts="8"
      />
      <GroupComponent title={'Kenwoods'} bgColor="#FFCB67" noOfContacts="5" />
      <GroupComponent
        title={'Honda Electrics'}
        bgColor="#FF7D54"
        noOfContacts="4"
      />
      <View style={styles.scan}>
        <ScanCameraComponent />
      </View>
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
    paddingLeft: 25,
    paddingRight: 25,
    width: '100%',
    height: '100%',
  },
  groupsHead: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 20,
  },
  scan: {
    marginTop: '40%',
  },
});

export default GroupsScreen;
