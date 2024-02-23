// screens/SignUp.js
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {signupUser} from '../networks/RegistrationAuthentication';

const SignupFunction = (
  user_fullname: string,
  user_email: string,
  password: string,
) => {
  console.log(user_fullname, user_email, password);
  signupUser({
    signupFullname: user_fullname,
    signupEmail: user_email,
    signupPassword: password,
  });
};
const SignUpScreen = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('OtpSend');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/experionLogo.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Fullname"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <ButtonComponent
        title="SIGN UP"
        function={() => {
          SignupFunction(fullname, email, password);
        }}
      />
      <Text style={styles.confirmAccount}>
        Already have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}>
          Login!
        </Text>
      </Text>
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
    margin: 12,
    padding: 10,
    marginTop: '40%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  confirmAccount: {
    marginTop: '50%',
    marginLeft: '20%',
  },
  loginLink: {
    color: 'red',
  },
});

export default SignUpScreen;
