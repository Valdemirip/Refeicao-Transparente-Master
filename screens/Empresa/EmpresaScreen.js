import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    EmpresaMessageButton,
    EmpresaMessageButtonText,
    EmpresaMessageButtonTextBold

} from './styles';

import SignInput from '../../components/SignInput';
import refTransLogo from '../../assets/Logo.svg';


export default function EmpresaScreen () {

    const navigation = useNavigation();

    const [nomeField, setNomeField] = useState('');
    const [cnpjField, setCnpjField] = useState('');
    const [enderecoField, setEndereco] = useState('');
    const [cidadeField, setCidadelField] = useState('');
    const [emailField, setEmaillField] = useState('');
    const [telefoneField, setTelefoneField] = useState('');

    const handleSignInClick = () => {

    }
    
    const handleMessageButtonClick = () => {

        navigation.reset({
            routes: [{nome: 'SignIn'}]
        }); 
    }
    
    return (
        <Container>
            <refTransLogo width="100%" heigth="160" />

            <InputArea>

                <SignInput
                    
                            placeholder="Nome fantasia"
                            value={nomeField}
                            onChangeText={t=>setNomeField(t)}
                />

                <SignInput
                    
                            placeholder="CNPJ"
                            value={cnpjField}
                            onChangeText={t=>setCnpjField(t)}
                />

                <SignInput
                     
                            placeholder="Endereço"
                            value={enderecoField}
                            onChangeText={t=>setEndereco(t)} 
                     
                />
                
                <SignInput
                    
                            placeholder="Cidade"
                            value={cidadeField}
                            onChangeText={t=>setCidadeField(t)}
                />

                <SignInput
                    
                            placeholder="E-mail"
                            value={emailField}
                            onChangeText={t=>setEmailField(t)}
                />

                

                <CustomButton onPress={handleSignInClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            
           
        </Container>
    );
} 