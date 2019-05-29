import React, {Component} from 'react';
import EditContainer from '../AuthGateway/EditContainer/EditContainer'

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
            <button>Add New Quote</button>
            <button onClick={this.props.handleLogout}>Logout</button>
            <h3>Here are all of {this.props.username}'s quotes:</h3>
        </div>
    }
}




export default UserContainer