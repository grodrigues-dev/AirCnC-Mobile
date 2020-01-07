import React, {useState, useEffect} from 'react'
import { Text, FlatList, StyleSheet,AsyncStorage, View } from 'react-native'

import api from '../services/api'

export default function Bookings() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        async function loadBookings() {
            const user_email = await AsyncStorage.getItem('email')
            const response = await api.get('/bookings/index', {
                headers: { user_email }
            });
            setBookings(response.data);            
            console.log(response.data);
        };
        loadBookings()
    }, [])

    return (
        <View>
            {/* <FlatList
                style={}
                data={bookings}
                keyExtractor={booking =>booking._id}
                renderItem ={({item})=>(
                    <View>
                        <Text>item.</Text>
                    </View>
                )}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({

})

