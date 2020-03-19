import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../view/Dashboard'
import Perfil from '../view/Perfil'

import Login from '../view/Login'

import Empyt from '../view/Empyt'

const Stack = createStackNavigator();

export default function navigation({ isAuth }) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        {!!isAuth
        ?
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Perfil" component={Perfil} />
          </>
        :
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Empyt} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
