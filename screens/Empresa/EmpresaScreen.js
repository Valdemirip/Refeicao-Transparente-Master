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

import EmpresaInput from '../../components/SignInput';
import refTransLogo from '../../assets/Logo.svg';


export default function EmpresaScreen () {

    const navigation = useNavigation();

    const [nomeField, setNomeField] = useState('');
    const [cnpjField, setCnpjField] = useState('');
    const [enderecoField, setEndereco] = useState('');
    const [cidadeField, setCidadelField] = useState('');
    const [emailField, setEmaillField] = useState('');
    const [telefoneField, setTelefoneField] = useState('');

    const handleProdutoClick = () => {

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

                <EmpresaInput
                    
                            placeholder="Nome fantasia"
                            value={nomeField}
                            onChangeText={t=>setNomeField(t)}
                />

                <EmpresaInput
                    
                            placeholder="CNPJ"
                            value={cnpjField}
                            onChangeText={t=>setCnpjField(t)}
                />

                <EmpresaInput
                     
                            placeholder="Endereço"
                            value={enderecoField}
                            onChangeText={t=>setEndereco(t)} 
                     
                />
                
                <EmpresaInput
                    
                            placeholder="Cidade"
                            value={cidadeField}
                            onChangeText={t=>setCidadeField(t)}
                />

                <EmpresaInput
                    
                            placeholder="E-mail"
                            value={emailField}
                            onChangeText={t=>setEmailField(t)}
                />

                <EmpresaInput    
                            placeholder="E-mail"
                            value={telefoneField}
                            onChangeText={t=>setTelefoneField(t)}
                        />

                <CustomButton onPress={handleProdutoClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            
           
        </Container>
    );
} 