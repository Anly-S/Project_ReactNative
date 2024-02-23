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
import ContactsScreen from '../screens/Contacts';
import ProfileScreen from '../screens/Profile';
import GroupsScreen from '../screens/Groups';

const Stack = createNativeStackNavigator();

export function HomeStackMavigation() {
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
      <Stack.Screen
        name="Contacts"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="contacts" size={42} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="groups" size={42} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" size={42} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}
