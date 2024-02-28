import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const InputComponent = (props: any) => {
  return (
    <View>
      <Text style={styles.inputHeadStyle}>{props.inputHead}</Text>
      <TextInput style={styles.inputStyle} onChangeText={props.setText} />
    </View>
  );
};
// {
//   props.inputPlaceholder;
//   {props.inputValue}
//   {props.setText}
//onChangeText={setEmail}
// }

const styles = StyleSheet.create({
  inputHeadStyle: {
    marginLeft: 25,
    backgroundColor: '#FFF',
    color: '#000',
    alignSelf: 'flex-start',
  },
  inputStyle: {
    height: 50,
    margin: 12,
    borderWidth: 3,
    borderColor: '#A1D5E3',
    padding: 10,
    borderRadius: 8,
    marginTop: -10,
    zIndex: -1,
  },
});

export default InputComponent;
