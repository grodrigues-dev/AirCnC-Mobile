import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './pages/login'
import List from './pages/list'
import Book from './pages/book'
import Bookings from './pages/bookings'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List, 
        Book, 
        Bookings
    })
);

export default Routes;