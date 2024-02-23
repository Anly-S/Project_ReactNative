// App.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OtpScreen from '../screens/Otp';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import OtpSend from '../screens/OtpSend';

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpSend"
        component={OtpSend}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
