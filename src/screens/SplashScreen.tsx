import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// const AuthenticationContext = React.createContext();

// const useAuthentication = () => {
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//   const login = () => {
//     setIsLoggedIn(true);
//   };

//   return {isLoggedIn, login};
// };

const SplashScreen = () => {
  //   const navigation = useNavigation();
  //   const {isLoggedIn} = useContext(AuthenticationContext);

  //   useEffect(() => {
  //     // Simulate checking for authentication
  //     setTimeout(() => {
  //       if (isLoggedIn) {
  //         navigation.replace('Login');
  //       } else {
  //         navigation.replace('SignUp');
  //       }
  //     }, 3000); // Adjust the duration as needed (e.g., 3000 milliseconds)
  //   }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/experionLogo.png')}
      />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

// const App = () => {
//   const auth = useAuthentication();

//   return (
//     <AuthenticationContext.Provider value={auth}>
//       <SplashScreen />
//     </AuthenticationContext.Provider>
//   );
// };

// export default App;
export default SplashScreen;
