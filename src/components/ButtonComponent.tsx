// components/ButtonComponent.js
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonComponent = (props: any) => {
  const navigation = useNavigation();
  const onPress = () => {
    props.function();
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#A1D5E3',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginLeft: '3%',
    marginRight: '3%',
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
