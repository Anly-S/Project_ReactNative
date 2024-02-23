import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../screens/Login';

const OtpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/experionLogo.png')}
      />
      <View style={styles.otp}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
      <ButtonComponent
        title="VERIFY"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 300,
    padding: 20,
  },
  logo: {
    marginLeft: 70,
    marginBottom: '20%',
    margin: 12,
    padding: 10,
  },
  input: {
    height: 50,
    width: 40,
    marginRight: 12,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  otp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
});

export default OtpScreen;
