import React from 'react'
import Home from './component/Home';
import UsersList,{loadData} from './component/usersList'

export default [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        loadData,
        path:"/users",
        component:UsersList
    }
]