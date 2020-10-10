import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    styleSheet,
    text,
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    ProdutosMessageButton,
    ProdutosMessageButtonText,
   // ProdutosMessageButtonTextBold
} from './styles';


   const handleSignInScreenClick = () => {
        navigation.navigate('CadastroProdutos')
        
    }



export default function ProdutosScreen () {

    const navigation = useNavigation();
    
    //const [produtosField, setProdutosField] = useState('');
    //const [tipoField, setTipoField] = useState('');
    //const [valorField, setValorlField] = useState('');

    const handleMessageClick = () => {
        navigation.navigate('Abacate')
    }

    const handleSignInClick = () => {
        navigation.navigate('CadastroProdutos')
    }

    const handleSignInMessageClick = () => {
        navigation.navigate('Empresa')
    }

    const handleMessageButtonClick = () => {
        navigation.navigate('Rabanetes')

   
    }
    return (
        

       
        <Container>      
                       
                     HOME
               
                <CustomButton onPress={handleMessageClick}>
                    <CustomButtonText>ABACATE</CustomButtonText>
                </CustomButton>

                <CustomButton onPress={handleMessageButtonClick}>
                    <CustomButtonText>RABANETE</CustomButtonText>
                </CustomButton>


                <CustomButton onPress={handleSignInClick}>
                    <CustomButtonText>Cadastrar Produtos</CustomButtonText>
                </CustomButton>

                <CustomButton onPress={handleSignInMessageClick}>
                    <CustomButtonText>Cadastrar Empresa</CustomButtonText>
                </CustomButton>

                <CustomButton onPress={handleSignInScreenClick}>
                    <CustomButtonText>Voltar</CustomButtonText>
                </CustomButton>


        </Container>




    );
}

