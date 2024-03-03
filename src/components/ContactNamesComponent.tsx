import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ContactNameComponent = (props: any) => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log('Hello hi', props.card_id);
    navigation.navigate('CardListScreen' as never, {
      name: props.title2,
      card_id: props.card_id,
    });
  };
  return (
    <TouchableOpacity style={styles.contactContainer} onPress={handlePress}>
      <View style={[styles.profileIcon, {backgroundColor: props.iconColor}]}>
        <Text style={styles.letter}>{props.title1}</Text>
      </View>
      <Text style={styles.contactName}>{props.title2}</Text>
    </TouchableOpacity>
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
    fontFamily: 'Roboto',
    marginLeft: 10,
    color: 'black',
    fontSize: 22,
  },
  profileIcon: {
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
