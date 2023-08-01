import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Movies from './Movies';
import Tv from './Tv';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Detail from './Detail';
import Profdetail from './Profdetail';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Homestack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={Detail} options={{headerTransparent:true,headerTitle:"",headerTintColor:"white"}}/>
      <Stack.Screen name="profile" component={Profdetail} options={{headerTransparent:true,headerTitle:"",headerTintColor:"white"}}/>
    </Stack.Navigator>
  )
}
function Moviestack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={Detail} options={{headerTransparent:true,headerTitle:"",headerTintColor:"white"}}/>
      <Stack.Screen name="profile" component={Profdetail} options={{headerTransparent:true,headerTitle:"",headerTintColor:"white"}}/>
    </Stack.Navigator>
  )
}

function Tvstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tv" component={Tv} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={Detail} options={{headerTransparent:true,headerTitle:"",headerTintColor:"white"}}/>
      <Stack.Screen name="profile" component={Profdetail} options={{headerTransparent:true,headerTitle:"",headerTintColor:"white"}}/>
    </Stack.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Homescreen" component={Homestack} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Moviescreen" component={Moviestack} options={{
          
          tabBarIcon: ({ color }) => (
            <Icon name="film" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Tvscreen" component={Tvstack} options={{
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