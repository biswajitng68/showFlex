import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import Movies from './Movies';
import Tv from './Tv';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Movies" component={Movies} options={{
          
          tabBarIcon: ({ color }) => (
            <Icon name="film" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Tv" component={Tv} options={{
          tabBarLabel: 'Tv',
          tabBarIcon: ({ color }) => (
            <Icon name="tv" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App