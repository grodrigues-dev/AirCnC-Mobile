import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

import logo from '../assets/logo.png'
import { TextInput } from 'react-native-gesture-handler'

export default function Login() {
    return (
        <View style={styles.container}>

            <Image source={logo} />
            <View style={styles.form}>
            <Text style={styles.laber}>SEU EMAIL *</Text>
            <TextInput 
            style={styles.input}
            placeholder="Seu e-mail"
            placeholderTextColor="#999"
            heyboardtype="email-address"
            autoCapitalize= "none"
            autoCorrect={false}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    label: {
        fontWeight: 'bold', 
        color: '#444', 
        marginBottom: 8
    }, 
    form: {
        alignSelf: 'stretch', 
        paddingHorizontal: 30 ,
        marginTop: 30
    }, 
    input: {
        borderWidth: 1, 
        borderColor: "#ddd", 
        paddingHorizontal: 20,
        fontSize: 16, 
        color: "#444", 
        height: 44, 
        marginBottom: 20, 
        borderRadius: 2
    }
});