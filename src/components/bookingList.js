import React, { useState, useEffect } from 'react'
import { Text, FlatList, StyleSheet, AsyncStorage, View } from 'react-native'

import api from '../services/api'

export default function Bookings() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        async function loadBookings() {
            const user_email = await AsyncStorage.getItem('email')
            const response = await api.get('/bookings/indexBookings', {
                headers: { user_email }
            });
            setBookings(response.data);
            console.log(response.data);

        };
        loadBookings()
    }, [])

    return (
        <View>
            <FlatList
                style={styles.container}
                data={bookings}
                keyExtractor={booking => booking._id}
                renderItem={({ item }) => (
                    <View style={styles.bookings}>
                        <Text style={styles.text}>{`Reserva solicitada em ${item.spot[0].company} para a data de ${item.date}.`}</Text>
                        <View style={styles.string}>
                            <Text style={styles.text}>Status da solicitação: </Text>
                            <Text style={styles.approved}>{`${item.approved ? 'Aprovada' : ''}`}</Text>
                            <Text style={styles.reject}>{`${item.approved ? '' : 'Pendente'}`}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    string: {
        flexDirection: "row"
    },
    bookings: {
        marginTop: 20,
    },
    approved: {
        color: '#84C870', 
        fontSize: 16,
    },
    reject: {
        color: '#e55e5e', 
        fontSize: 16,
    },
    text: {
        fontSize: 16,
        lineHeight: 22
    }
})

