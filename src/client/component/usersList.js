import React, { Component } from 'react'

import {connect} from 'react-redux'
import {fetchUsers} from "../action/index"


class UsersList extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }
    renderUsers(){
        return this.props.users.map(user =>{
        return <li key ={user.id}>{user.name}</li>
        })
    }
    render(){
        return (
            <div>
                Here ' s a big list of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

function mapStateTopProps(state){
    return {users:state.users}
}


export default connect(mapStateTopProps,{fetchUsers})(UsersList)