import React from 'react';
import { View, StyleSheet, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

function Logout({ navigation }) {
    async function handleNavigate() {
        await AsyncStorage.removeItem('user')
        navigation.navigate('Login')
    }
    async function handleBookings() {
        navigation.navigate('Bookings')
    }
    return (
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.link} onPress={handleNavigate}>sair</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.link} onPress={handleBookings}>reservas</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    link: {
        fontSize: 18,
        color: '#f05a5b',
    },
    footer: {
        flexDirection: "row",
        margin: 10,
        justifyContent: 'space-between',
    },
   
})

export default withNavigation(Logout);