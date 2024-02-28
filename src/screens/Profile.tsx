import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ScanCameraComponent from '../components/ScanCameraComponent';
import {userLogin} from '../context/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import Constants from '../utils/Constants';
import {setStringItem} from '../utils/Utils';
import InputComponent from '../components/InputComponent';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);
  console.log('isLoggedIn:', isLoggedIn);
  const userData = useSelector((state: any) => state.userDataReducer);
  console.log('userData:', userData);
  const LogoutFunction = async () => {
    setStringItem(Constants.IS_LOGIN, 'false');
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
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.changePass}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={LogoutFunction}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.scan}>
        <ScanCameraComponent />
      </View>
    </View>
  );
};
// import React, {useEffect, useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import ScanCameraComponent from '../components/ScanCameraComponent';
// import {userLogin} from '../context/userSlice';
// import {useDispatch} from 'react-redux';
// import Constants from '../utils/Constants';
// import {getItem, setStringItem} from '../utils/Utils';
// import {profileData} from '../networks/ProfileApi';

// const ProfileScreen = () => {
//   const dispatch = useDispatch();
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     // Fetch profile data when the component mounts
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const userId = getItem(Constants.USER_DATA);
//       const response = await profileData({userId});
//       if (response.success) {
//         setProfileData(response.profileResp);
//       } else {
//         console.log('Error fetching profile:', response.errorMessage);
//       }
//     } catch (error) {
//       console.log('Error fetching profile:', error);
//     }
//   };

//   const LogoutFunction = async () => {
//     setStringItem(Constants.IS_LOGIN, 'false');
//     dispatch(userLogin(false));
//   };

//   return (
//     <View style={styles.container}>
//       {profileData ? (
//         <>
//           <View style={styles.profileIcon}>
//             <Text style={styles.letter}>P</Text>
//           </View>
//           <Text style={styles.greeting}>Hi {profileData?.fullName}!</Text>
//           <Text style={styles.jobTitle}>Trainee</Text>
//           <Text style={styles.email}>{profileData?.email}</Text>
//           <Text style={styles.contactCount}>
//             Total Contacts: {profileData?.totalContacts}
//           </Text>
//           <Text style={styles.groupsCount}>
//             Contact Groups: {profileData?.totalAcceptedCards}
//           </Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.viewShared}>View Shared Cards</Text>
//             <Image
//               style={styles.rightArrow}
//               source={require('../assets/rightArrow.png')}></Image>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.changePass}>Change Password</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={LogoutFunction}>
//             <Text style={styles.logout}>Logout</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <Text>Loading profile...</Text>
//       )}
//       <ScanCameraComponent />
//     </View>
//   );
// };
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
    width: '100%',
    height: '100%',
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
  button1: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    borderBlockColor: '#000',
    width: '95%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#A1D5E3',
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
    backgroundColor: '#A1D5E3',
  },
  logout: {
    color: 'red',
    fontSize: 20,
  },
  scan: {
    marginTop: '32%',
  },
});

export default ProfileScreen;
