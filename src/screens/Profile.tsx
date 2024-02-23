import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ScanCameraComponent from '../components/ScanCameraComponent';
import {userLogin} from '../context/userSlice';
import {useDispatch} from 'react-redux';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const LogoutFunction = async () => {
    dispatch(userLogin(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileIcon}>
        <Text style={styles.letter}>P</Text>
      </View>
      <Text style={styles.greeting}>Hi Pranav!</Text>
      <Text style={styles.jobTitle}>Trainee</Text>
      <Text style={styles.email}>pranav@experionglobal.com</Text>
      <Text style={styles.contactCount}>Total Contacts:10</Text>
      <Text style={styles.groupsCount}>Contact Groups:4</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.viewShared}>View Shared Cards</Text>
        <Image
          style={styles.rightArrow}
          source={require('../assets/rightArrow.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.changePass}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={LogoutFunction}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      <ScanCameraComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    paddingTop: '15%',
    paddingBottom: '8%',
    backgroundColor: '#FFFF',
    paddingLeft: 25,
    paddingRight: 25,
  },
  profileIcon: {
    borderRadius: 40,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FB5B5B',
  },
  letter: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
  },
  jobTitle: {
    fontSize: 25,
    color: '#565656',
    paddingTop: 25,
  },
  email: {
    fontSize: 20,
    color: '#565656',
  },
  contactCount: {
    fontSize: 20,
    color: '#000',
    paddingTop: 30,
    marginLeft: 10,
  },
  groupsCount: {
    fontSize: 20,
    color: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    borderBlockColor: '#000',
    width: '95%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  viewShared: {
    color: '#000',
    fontSize: 20,
  },
  rightArrow: {
    marginLeft: 20,
  },
  changePass: {
    color: '#000',
    fontSize: 20,
  },
  logout: {
    color: 'red',
    fontSize: 20,
  },
});

export default ProfileScreen;
