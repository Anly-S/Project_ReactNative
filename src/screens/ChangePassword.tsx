// screens/ChangePasswordScreen.js
import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';

const ChangePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate back to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/experionLogo.png')}
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
});

export default ChangePasswordScreen;
