// App.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ContactsScreen from '../screens/Contacts';
import ProfileScreen from '../screens/Profile';
import GroupsScreen from '../screens/Groups';
import NewPage from '../screens/NewPage';

const Stack = createNativeStackNavigator();

export function HomeStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="SignUp">
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
      {/* <Tab.Screen
        name="NewPage"
        component={NewPage}
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
      /> */}
    </Tab.Navigator>
  );
}
