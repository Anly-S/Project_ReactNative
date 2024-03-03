import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const OtpScreen = () => {
  const navigation = useNavigation();

  const loginFunction = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/experionLogo.svg')}
      />
      <View style={styles.otp}>
        {/* Render your OTP input fields here */}
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
      {/* Pass onPress instead of function */}
      <ButtonComponent
        title="VERIFY"
        onPress={() => {
          loginFunction(); // Call the function to navigate to the Login screen
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
    marginHorizontal: 30,
    marginBottom: 10,
  },
});

export default OtpScreen;
