import React from 'react';
import { View, StyleSheet, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

function Logout({ navigation }) {
    async function handleNavigate() {
        await AsyncStorage.removeItem('user')
        navigation.navigate('Login')
    }

    return (
        <View>
            <TouchableOpacity>
                <Text style={styles.logout} onPress={handleNavigate}>sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logout: {
        fontSize: 18,
        color: '#f05a5b',
        marginLeft: 18
    }
})

export default withNavigation(Logout);