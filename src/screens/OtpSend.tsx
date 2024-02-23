import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const OtpSend = () => {
  const navigation = useNavigation();
  //   const handlePress = () => {
  //     // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  //     // setLoggedIn(true);
  //     navigation.navigate('Otp');
  //   };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/experionLogo.png')}
      />
      <TextInput style={styles.input} placeholder="Email" />
      <ButtonComponent
        title="SEND"
        onPress={() => navigation.navigate('Otp')}
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
    marginBottom: '30%',
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
