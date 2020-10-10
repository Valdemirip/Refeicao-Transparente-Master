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
    
        navigation.navigate('SignIn')
    }


//import SignInput from '../../components/SignInput';
//import refTransLogo from '../../assets/Logo.svg';

    export default function ProdutosScreen () {

    const navigation = useNavigation();
    const [emailField, setEmailField] = useState('');
    
    //const [produtosField, setProdutosField] = useState('');
    //const [tipoField, setTipoField] = useState('');
    //const [valorField, setValorlField] = useState('');

    const handleSignInClick = () => {
        navigation.navigate('Home')
    }
        

    const handleMessageButtonClick = () => {
        /*navigation.reset({
            routes: [{ nome: 'SignUp' }]
        });*/
        navigation.navigate('Maleficio')

   
    }


    const handleButtonClick = () => {
        /*navigation.reset({
            routes: [{ nome: 'SignUp' }]
        });*/
        navigation.navigate('Beneficios')

   
    }
    return (
        

       
        <Container>      
                       ABACATE
                        Antigo vilão da alimentação, o abacate hoje é tido como verdadeiro herói da saúde. Por ser rica fonte de 
                        gordura e caloria em excesso, a fruta age como remédio natural no organismo. Os benefícios do abacate vão 
                        desde a proteção contra determinados tipos de câncer até brilho para os cabelos.

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

