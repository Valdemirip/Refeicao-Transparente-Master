import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


//paginas passo 1: Criar importaçao das screens

import SignInScreen from '../screens/SignIn/SignInScreen'
import SignUpScreen from '../screens/SignUp/SignUpScreen'
import EmpresaScreen from '../screens/Empresa/EmpresaScreen'
import ProdutosScreen from '../screens/CadastroProdutos/ProdutosScreen'
import ContatoScreen from '../screens/Contato/ContatoScreen'
import RabanetesScreen from '../screens/Rabanetes/RabanetesScreen'
import SearchScreen from '../screens/Search/SearchScreen'
import AbacateScreen from '../screens/Abacate/AbacateScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import IndustrializadosScreen from '../screens/Industrializados/IndustrializadosScreen'
import FrutasScreen from '../screens/Frutas/FrutasScreen'
import CereaisScreen from '../screens/Cereais/CereaisScreen'
import MaleficioScreen from '../screens/Maleficio/MaleficioScreen'
import BeneficiosScreen from '../screens/Beneficios/BeneficiosScreen'




//cria a stack que permite o empilhamento de telas
const Stack = createStackNavigator();


export default () => (



//const MainStack = () => {
    
        <Stack.Navigator initialRouteName="SignIn" headerMode="none">

            {/*passo 2: adicionar a Rota das screens*/}  
            
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Empresa" component={EmpresaScreen} />
            <Stack.Screen name="Contato" component={ContatoScreen} />
            <Stack.Screen name="CadastroProdutos" component={ProdutosScreen} />
            <Stack.Screen name="Rabanetes" component={RabanetesScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Abacate" component={AbacateScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Industrializados" component={IndustrializadosScreen} />
            <Stack.Screen name="Frutas" component={FrutasScreen} />
            <Stack.Screen name="Cereais" component={CereaisScreen} />
            <Stack.Screen name="Maleficio" component={MaleficioScreen} /> 
            <Stack.Screen name="Beneficios" component={BeneficiosScreen} />

            
          
         </Stack.Navigator>

//}
);

//export default MainStack;

