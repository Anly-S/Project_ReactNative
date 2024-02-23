import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ContactNameComponent = (props: any) => {
  return (
    <View style={styles.contactContainer}>
      <View style={[styles.profileIcon, {backgroundColor: props.iconColor}]}>
        <Text style={styles.letter}>{props.title1}</Text>
      </View>
      <Text style={styles.contactName}>{props.title2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0000',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: '3%',
  },
  contactName: {
    fontWeight: 'normal',
    marginLeft: 10,
    color: 'black',
    fontSize: 22,
  },
  profileIcon: {
    // backgroundColor: `#AEFAAD`,
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default ContactNameComponent;
