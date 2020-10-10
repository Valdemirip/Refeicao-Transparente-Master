import React, { useState } from 'react';
import { StyleSheet, TextInput, View, backGround } from 'react-native';

export default ({ IconSvg, placeholder, value, change, password }) => {
    const [text, setText] = useState('');

    return (
        <View style={styles.InputArea}>
            
            {IconSvg}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={c => change(c)}
                secureTextEntry={password}
                style={styles.Input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    InputArea: {
        flex: 1,
        
        backgroundColor: "#FFF",
        flexDirection: "row",
        borderRadius: "30px",
        paddingLeft: "15px",
        alignItems: "center",
        marginBottom: "40px"
    },
    Input: {
        flex: 1,
        fontSize: "16px",
        color: "#268596",
        margin: "center"
    }
});
