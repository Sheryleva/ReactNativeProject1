import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginScreen from './app/assets/screens/LoginScreen';
import ArticleListScreen from './app/assets/screens/ArticleListScreen';
import ArticleDetailsScreen from './app/assets/screens/ArticleDetailsScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MyTheme = {
  colors: {
    primary: 'rgb(0,255,255)',
    text: 'rgb(0,255,255)',
    border: 'rgb(0,255,255)',
  },
};


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Home" component={LoginScreen} />
        <Stack.Screen name="ArticleList" component={ArticleListScreen} />
        <Stack.Screen name="ArticleListDetails" component={ArticleDetailsScreen} />
        <Stack.Screen name="ArticleDetailsScreen" component={ArticleDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}