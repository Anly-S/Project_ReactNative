// screens/Login.js
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../networks/AuthenticationApi';
import {setStringItem} from '../utils/Utils';
import Constants from '../utils/Constants';
import {userLogin} from '../context/userSlice';
import {useDispatch} from 'react-redux';
import {userData} from '../context/dataSlice';
import InputComponent from '../components/InputComponent';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const LoginFunction = async () => {
    console.log(email, password);
    const loginStatus = await loginUser({
      loginUsername: email,
      loginPassword: password,
    });
    if (loginStatus.success === true) {
      setStringItem(Constants.IS_LOGIN, 'true');
      dispatch(userLogin(true));
      setStringItem(Constants.USER_DATA, JSON.stringify(loginStatus.loginResp));
      dispatch(userData(loginStatus.loginResp));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/experionLogo.png')}
      />
      <InputComponent inputHead="Email" inputValue={email} setText={setEmail} />
      <InputComponent
        inputHead="Password"
        inputValue={password}
        setText={setPassword}
      />
      <ButtonComponent
        function={() => {
          LoginFunction();
        }}
        title="LOGIN"
      />
      <Text
        style={styles.forgotPass}
        onPress={() => navigation.navigate('OtpSend')}>
        Forgot password?
      </Text>
      <Text style={styles.askingAccount}>
        Don't you have an account?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('SignUp')}>
          Sign up!
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
    paddingTop: '40%',
    // marginTop: '40%',
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

export default LoginScreen;
