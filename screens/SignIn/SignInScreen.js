import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, Background} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'
import SignInput from '../../components/SignInput';

import refTransLogo from '../../assets/Logo.svg';
//import EmailIcon from '../../assets/email.svg';
/*import LockIcon from '../../assets/lock.svg';*/

const SignInScreen = () => {

    const navigation = useNavigation();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordlField] = useState('');
    //essa const indica a pagina destino
    const handleSignClick = () => {
        navigation.navigate('Home')
    }
    const handleMessageButtonClick = () => {
        /*navigation.reset({
            routes: [{ nome: 'SignUp' }]
        });*/
        navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={styles.Container}>
            <refTransLogo width="100%" heigth="160" />
            <View style={styles.InputArea}>
                <SignInput IconSvg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    change={setEmailField}
                />
                <SignInput IconSvg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    change={setPasswordlField}
                    password={true} />
                <TouchableOpacity style={styles.CustomButton} onPress={handleSignClick}>
                    <Text style={styles.CustomButtonText}> LOGIN</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.SignMessageButton} onPress={handleMessageButtonClick}>
                <Text style={styles.SignMessageButtonText}>Criar Usuário e Senha.</Text>
                <Text style={styles.SignMessageButtonBold}>  Aqui!</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}

export default SignInScreen;