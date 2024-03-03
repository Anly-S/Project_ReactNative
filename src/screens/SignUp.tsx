import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {signupUser} from '../networks/RegistrationAuthentication';
import {useDispatch} from 'react-redux';
import {userData} from '../context/dataSlice';
import {userLogin} from '../context/userSlice';
import {setStringItem} from '../utils/Utils';
import Constants from '../utils/Constants';
import InputComponent from '../components/InputComponent';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const SignUpFunction = async () => {
    console.log(email, password);
    const signupStatus = await signupUser({
      signupFullname: fullname,
      signupEmail: email,
      signupPassword: password,
    });
    if (signupStatus.success === true) {
      setStringItem(Constants.IS_LOGIN, 'true');
      dispatch(userLogin(true));
      setStringItem(
        Constants.USER_DATA,
        JSON.stringify(signupStatus.signupResp),
      );
      dispatch(userData(signupStatus.signupResp));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/experionLogo.png')}
      />
      <InputComponent
        inputHead="Fullname"
        inputValue={fullname}
        setText={setFullname}
      />
      <InputComponent inputHead="Email" inputValue={email} setText={setEmail} />
      <InputComponent
        inputHead="Password"
        inputValue={password}
        setText={setPassword}
      />
      <ButtonComponent
        title="SIGN UP"
        function={() => {
          SignUpFunction();
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
    backgroundColor: '#FFF',
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
