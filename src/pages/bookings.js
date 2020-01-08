import React from 'react'
import { Text, Image, SafeAreaView, View, StyleSheet } from 'react-native'
import Logout from '../components/logout'

import logo from '../assets/logo.png'
import BookingList from '../components/bookingList'

export default function Bookings() {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.title}>Suas Reservas:</Text>
                <View>
                    <BookingList />
                </View>
            </SafeAreaView>
            <Logout />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
        marginTop: 10
    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 40
    }, 
    container: {
        flex:1
    }
})