// screens/Login.js
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../screens/Login';
import InputComponent from '../components/InputComponent';

const ChangePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
      <InputComponent
        inputHead="New Password"
        inputValue={newPassword}
        setText={setNewPassword}
      />
      <InputComponent
        inputHead="Confirm Password"
        inputValue={confirmPassword}
        setText={setConfirmPassword}
      />
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
