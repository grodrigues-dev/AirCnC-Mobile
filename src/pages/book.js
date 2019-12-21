import React, {useState} from 'react'
import { Text,TextInput, SafeAreaView,StyleSheet, AsyncStorage } from 'react-native'

export default function Book({ navigation }) {
    const [date, setDate]= ('');
    const id = navigation.getParam('id');
    return (
        <SafeAreaView>
            <Text style={styles.laber}>DATA DE INTERESSE *</Text>
            <TextInput 
            style={styles.input}
            placeholder="Qualdata você quer reservar"
            placeholderTextColor="#999"
            autoCapitalize= "words"
            autoCorrect={false}
            value={date}
            onChangeText={setDate}
            />
        </SafeAreaView>
        )

}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold', 
        color: '#444', 
        marginBottom: 8
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
    }, 
    button: {
        height: 42, 
        backgroundColor: '#f05a5b', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 2
    }, 
    buttonText: {
        color: '#fff', 
        fontWeight: "bold", 
        fontSize: 16,
    }
})