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


const SignInScreen = () => {

    //const navigation = useNavigation();
    //const [emailField, setEmailField] = useState('');
    //const [passwordField, setPasswordlField] = useState('');
    //essa const indica a pagina destino
    
        navigation.navigate('Beneficio')
    }


//import SignInput from '../../components/SignInput';
//import refTransLogo from '../../assets/Logo.svg';

    export default function ProdutosScreen () {

    const navigation = useNavigation();
    
    //const [produtosField, setProdutosField] = useState('');
    //const [tipoField, setTipoField] = useState('');
    //const [valorField, setValorlField] = useState('');

    const handleSignInClick = () => {
        navigation.navigate('Home')
    }

    const handleMessageButtonClick = () => {
        navigation.navigate('Maleficio')
    }

    const handleButtonClick = () => {
        navigation.navigate('Beneficios')
    }
    
    
    return (
        

       
        <Container>      
                       
                                                
                            Os benefícios dos cereais são inúmeros e aqui apontamos alguns dos mais 
                            importantes para incentivá-lo a incluí-los em sua dieta:

                     
                <CustomButton onPress={handleButtonClick}>
                    <CustomButtonText>BENEFÍCIOS</CustomButtonText>
                </CustomButton>

                <CustomButton onPress={handleMessageButtonClick}>
                    <CustomButtonText>MALEFÍCIOS</CustomButtonText>
                </CustomButton>


                <CustomButton onPress={handleSignInClick}>
                    <CustomButtonText>VOLTAR</CustomButtonText>
                </CustomButton>


        </Container>




    );
}

