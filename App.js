// import { StyleSheet, Text, View } from "react-native";
// import Login from "./components/login.js";
// import Signup from "./components/signup.js";
// import Navigation from "./Navigation";
// import { Screen } from "react-native-screens";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";

// export default function App() {
//   return (  
//     <>
//         <View style={styles.container}>
//           <Navigation/>
//         </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}