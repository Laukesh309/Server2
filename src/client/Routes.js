import React from 'react'

import {Route} from 'react-router-dom';
import Home from './component/Home';
import UsersList from './component/usersList'

export default () => {
    return (
        <div>
            <Route exact path='/' component={Home}/>
            <Route path ="/users" component={UsersList}/>
        </div>
    )
}