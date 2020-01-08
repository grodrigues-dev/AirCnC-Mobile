import React, { useEffect, useState } from 'react'
import { Text,Image, SafeAreaView, AsyncStorage,View, StyleSheet } from 'react-native'
import api from '../services/api'

import logo from '../assets/logo.png'
import BookingList from '../components/bookingList'

export default function Bookings() {
    
    return (
        <SafeAreaView>
             <Image style={styles.logo} source={logo}/>
            <Text style={styles.title}>Suas Reservas:</Text>
            <View>
                <BookingList />
            </View>
        </SafeAreaView>
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
    }
})