import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const GroupComponent = (props: any) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: props.bgColor}]}>
      <View style={styles.content}>
        <Text style={styles.groupName}>{props.title}</Text>
        <View style={styles.groupDes}>
          <Image
            style={styles.groupIcon}
            source={require('../assets/groups.png')}></Image>
          <Text style={styles.groupCount}>{props.noOfContacts} Contacts</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 10,
    borderBlockColor: '#000',
    width: '95%',
    height: '18%',
    justifyContent: 'center',
    marginTop: 10,
  },
  groupName: {
    marginTop: 10,
    fontWeight: 'normal',
    marginLeft: 10,
    color: 'black',
    fontSize: 25,
  },
  groupIcon: {
    marginLeft: 10,
  },
  content: {
    marginLeft: 30,
    backgroundColor: '#FFF',
    height: '100%',
    width: '91%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 10,
  },
  groupDes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupCount: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default GroupComponent;
