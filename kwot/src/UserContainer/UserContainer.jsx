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
            <h1>Logged in! User Container!</h1>
        </div>
    }
}




export default UserContainer