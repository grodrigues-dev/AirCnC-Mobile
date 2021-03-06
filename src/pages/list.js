import React, {useState, useEffect} from 'react' 
import {Alert, SafeAreaView, View,ScrollView, StyleSheet, Image, AsyncStorage} from 'react-native'

// import URLAPI from 'react-native-dotenv'

import socketio  from 'socket.io-client'

import SpotList from '../components/spotList'

import logo from '../assets/logo.png'

import Logout from '../components/logout'

export default function List(){
    const [techs, setTechs] = useState([]);
    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storagedTechs =>{
            const techsArray = storagedTechs.split(',').map(tech =>tech.trim());
            setTechs(techsArray);                  
        })
    },[]);

    useEffect(()=>{
        AsyncStorage.getItem('user').then(user_id =>{
            //configurar no socket a porta do localhost que escuta a api
            const socket = socketio('http://172.22.120.165:3001', {
                query: {user_id }
            });             
            socket.on('booking_response', booking =>{
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })
        })
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <ScrollView>
                {techs.map(tech => <SpotList  key={tech} tech={tech}/>)}
            </ScrollView>
            <Logout/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    logo: {
        height: 32, 
        resizeMode: "contain", 
        alignSelf: "center", 
        marginTop: 40
    }
}); 