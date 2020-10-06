import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//paginas
import HomeScreen from '../screens/Home/HomeScreen'
import SignInSreen from '../screens/SignIn/SignInSreen'
import SignUpScreen from '../screens/SignUp/SignUpScreen'

//passo 1: Criar importaçao
import EmpresaScreen from '../screens/Empresa/EmpresaScreen'

//cria a stack que permite o empilhamento de telas
const Stack = createStackNavigator();

const MainStack = () => {
    //
    return <Stack.Navigator initialRouteName="Empresa" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInSreen} />
        <Stack.Screen name="SingUp" component={SignUpScreen} />
        {/*passo 2: adicionar a Rota*/}
          <Stack.Screen name="Empresa" component={EmpresaScreen} />
    </Stack.Navigator>
}
export default MainStack;

