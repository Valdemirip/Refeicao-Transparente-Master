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
    
    //const [produtosField, setProdutosField] = useState('');
    //const [tipoField, setTipoField] = useState('');
    //const [valorField, setValorlField] = useState('');

    const handleSignInClick = () => {
        navigation.navigate('Home')
    }

    const handleButtonClick = () => {
        navigation.navigate('Beneficios')

    }

    const handleMessageButtonClick = () => {
        /*navigation.reset({
            routes: [{ nome: 'SignUp' }]
        });*/
        navigation.navigate('Maleficio')

   
    }
    return (
        

       
        <Container>      
                       
                       Os rabanetes são excelentes fontes de nutrientes, tais como antioxidantes, que beneficiam o sistema imune, 
                       impedindo a ação dos radicais livres no organismo; fibras alimentares, que auxiliam o nosso sistema digestivo, além de vitamina C, 
                       potássio e fósforo, que ajudam no controle da pressão arterial e a saúde ...
               

               
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

