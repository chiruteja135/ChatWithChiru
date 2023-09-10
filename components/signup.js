import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
export default function Signup({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Sign up</Text>
      <TextInput style={styles.input} placeholder="Username"></TextInput>
      <TextInput style={styles.input} placeholder="EmailID"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      <TextInput style={styles.input} placeholder="PhoneNo"></TextInput>
      <View style={styles.button}>
        <Button title="Sign UP/ Create New Account">si</Button>
      </View>
      <Text>Are u an existing user?</Text>
      <TouchableOpacity onPress={() =>{navigation.navigate('Login');}}>
        <Text style={styles.signuplink}>click here for Login</Text>
      </TouchableOpacity>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    margin: 35,
    fontSize: 50
  },
  input: {
    backgroundColor: 'white',
    width: 390,
    borderRadius: 15,
    height: 45,
    textAlign: 'center',
    margin: 10
  },
  button: {
    margin: 40,
  },
  signuplink: {
    textDecorationLine: 'underline',
    color: 'blue',
  }

})
