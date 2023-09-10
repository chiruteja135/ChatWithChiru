import React from 'react'
import { View, Text, StyleSheet, TextInput, Button,TouchableOpacity } from 'react-native'
export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <TextInput style={styles.input} placeholder="EmailID"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      <View style={styles.button}>
        <Button title="login"></Button>
      </View>
      <Text>Are u a new user?</Text>
      <TouchableOpacity onPress={() =>{navigation.navigate('Signup');}}>
        <Text style={styles.signuplink}>click here for sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
