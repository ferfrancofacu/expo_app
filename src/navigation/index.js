import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { width, height } from '../constants/Utils'

import Dashboard from '../view/Dashboard'
import Perfil from '../view/Perfil'
import Login from '../view/Login'
import Empyt from '../view/Empyt'
import Interesses from '../view/Interesses'
import Eventos from '../view/Eventos'
import Ajuda from '../view/Ajuda'
import Chat from '../view/Chat'
import CriarPasta from '../view/CriarPasta'

const Stack = createStackNavigator();

export default function navigation({ isAuth, finishRegister }) {
  const initialRoute = !!finishRegister ? 'Dashboard' : 'Cadastro'
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"} initialRouteName={initialRoute}>
        {!!isAuth /*  ROTAS AUTENTICADAS */
        ? !finishRegister 
          ? <> 
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Perfil" component={Perfil} />
              <Stack.Screen name="Interesses" component={Interesses} />
              <Stack.Screen name="Eventos" component={Eventos} />
              <Stack.Screen name="Ajuda" component={Ajuda} />
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen name="CriarPasta" component={CriarPasta} />
            </>
          : <Stack.Screen name="Cadastro" component={Empyt} />
        : /*  ROTAS LIVRE */
          <> 
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Empyt} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}