import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function ArticleDetailsScreen({route}) {
  const { title } = route.params;
  const { photo } = route.params;
  const { description } = route.params;
  const { created_date } = route.params;
    return (
        <View style={styles.container}>
          <Image source= {{uri: photo}} style={{width: '100%', height:'100%',flex: 3, resizeMode: "stretch"}}/>
          <Text style={{fontSize: 25,fontWeight: "bold"}}> {title} </Text>
          <Text style={{fontSize: 15}}> {created_date} </Text>
          <Text style={{flex: 2,}}>{description}</Text>
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }
  });