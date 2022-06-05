import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';


export default class SignUpPage extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Image style={{marginBottom:50, width:70, height:70}} source={require('../assets/logo.png')} />
       
          <TextInput 
            style={styles.textInput}
            placeholder='Email'
            utoCapitalize="none"
          />
          <TextInput 
            secureTextEntry
            style={[styles.textInput]}
            placeholder='Password'
            placeholderTextColor='#ffffff'
          />
        
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textSignup}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>Have account? Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ABC9C',
    flexDirection: 'column'
  },
  textInput:{
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    color:'#ffffff',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10,
    width:350
  },
  buttonStyle:{
    backgroundColor:'#ffffff',
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,
    width:350
  },
  textSignup: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color:'#1ABC9C'
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
    marginTop:10
  },
});