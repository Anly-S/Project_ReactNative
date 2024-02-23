// screens/Login.js
import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../screens/Login';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/experionLogo.png')}
      />
      <TextInput style={styles.input} placeholder="New password" />
      <TextInput style={styles.input} placeholder="Confirm Password" />
      <ButtonComponent title="Change Password" onPress={handlePress} />
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
    marginTop: '40%',
  },
  logo: {
    marginLeft: 70,
    margin: 12,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  forgotPass: {
    marginTop: 20,
    marginLeft: 130,
    color: '#373737',
  },
  signupLink: {
    color: 'red',
  },
  askingAccount: {
    marginTop: '50%',
    marginLeft: '20%',
  },
});

export default ChangePasswordScreen;
