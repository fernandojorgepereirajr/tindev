import React from 'react'
import { BrowserRoouter, Route } from 'react-router-dom'

import Login from './pages/login/Login'
import Main from './pages/main/Main'

export default function Routes() {
    return (
        <BrowserRoouter>
            <Route path='/' exact component={Login} />
            <Route path='/devs/:id' component={Main} />
        </BrowserRoouter>
    )
}