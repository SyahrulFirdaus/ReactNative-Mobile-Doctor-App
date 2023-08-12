import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Details, Splash } from '../Pages';
import Login from '../Pages/Akun/Login'
import { BottomNavigator } from '../Component';
import Register from '../Pages/Akun/Register';
import Beranda from '../Pages/Details';
import LoginSplash from '../Pages/Akun/LoginSplash';
import Forgot from '../Pages/Akun/Forgot'
import ForgotRecoveryEmail from '../Pages/Akun/RecoveryEmail';
import HomePage from '../Pages/Home/HomePage';
import RecoverySMS from '../Pages/Akun/RecoverySMS';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Favorite" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Details} options={{ headerShown: false }} />
      <Tab.Screen name="Akun" component={LoginSplash} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (

    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotRecoveryEmail" component={ForgotRecoveryEmail} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="LoginSplash" component={LoginSplash} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      <Stack.Screen name="RecoverySMS" component={RecoverySMS} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({

})