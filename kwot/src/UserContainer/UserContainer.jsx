import React, {Component} from 'react';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }
    render(){
        return <div>
            <h1>Logged in to {this.props.username}'s User Container!</h1>
            <button>Edit</button>
            <button>Delete</button>
            <button onClick={this.props.handleLogout}>Logout</button>
        </div>
    }
}




export default UserContainer