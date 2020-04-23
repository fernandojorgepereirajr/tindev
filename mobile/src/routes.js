import { createAppContainer, createSwitchNavigator } from 'react-native'

import Login from './pages/login/Login'
import Main from './pages/main/Main'

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main
    })
)