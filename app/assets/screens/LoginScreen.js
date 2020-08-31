import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputName: '',
      TextInputPassword: '',
    };
  }
  
  CheckTextInput = () => {   
    const {navigate} = this.props.navigation; 
    //Handler for the Submit onPress
    if (this.state.TextInputName != '') {
      //Check for the Name TextInput
      if (this.state.TextInputEmail != '') {
        //Check for the Email TextInput
        navigate('ArticleList')
      } else {
        alert('Please Enter Password');
      }
    } else {
      alert('Please Enter Username');
    }
  
  };

  render(){
    
    return (
        <View style={styles.container}>
          {/* <Button 
            title = "Click Me!"
            onPress={() => alert("Button Clicked!")}/> */}
            <TextInput style={ styles.textInputStyle } placeholder = "Username" 
            onChangeText={TextInputName => this.setState({ TextInputName })}/>
            <TextInput secureTextEntry={true} style={ styles.textInputStyle } placeholder = "Password"
            onChangeText={TextInputPassword => this.setState({ TextInputPassword })}/>
            <Button title = "Login"
             color="#606070"

             onPress={ 
              this.CheckTextInput}
             
             />
          <StatusBar style="auto" />
        </View>
      );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding :20,
    },
    textInputStyle: {
      height: 60, 
      width: 300, 
      borderColor: "#00FFFF", 
      borderWidth: 1,
      padding :20,
      margin: 20,
      borderRadius: 30 ,

    }
  });