import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import OtpScreen from '../screens/Otp';
import InputComponent from '../components/InputComponent';

const OtpSend = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const OtpFunction = () => {
    navigation.navigate('Otp');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/experionLogo.png')}
      />
      <InputComponent inputHead="Email" inputValue={email} setText={setEmail} />
      <ButtonComponent
        title="SEND"
        function={() => {
          OtpFunction();
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
    height: 300,
    padding: 20,
    paddingBottom: '30%',
    backgroundColor: '#FFF',
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
});

export default OtpSend;
