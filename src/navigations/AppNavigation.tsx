// App.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactsScreen from '../screens/Contacts';
import ProfileScreen from '../screens/Profile';
import GroupsScreen from '../screens/Groups';
import NewPage from '../screens/NewPage';
import CardListScreen from '../screens/CardListScreen';
import CardDetailsScreen from '../screens/CardDetailsScreen';

const Stack = createNativeStackNavigator();

// export function HomeStackNavigation() {
//   return (
//     <Stack.Navigator initialRouteName="SignUp">
//       <Stack.Screen
//         name="Contacts"
//         component={BottomNavigation}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// }
const ContactStack = createNativeStackNavigator();

const ContactNavigation = () => {
  return (
    <ContactStack.Navigator initialRouteName="Contacts">
      <ContactStack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{headerShown: false}}
      />
      <ContactStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={{headerShown: false}}
      />
      <ContactStack.Screen
        name="CardDetailsScreen"
        component={CardDetailsScreen}
        options={{headerShown: false}}
      />
    </ContactStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contact"
        component={ContactNavigation}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="contacts" size={42} color={color} />
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
