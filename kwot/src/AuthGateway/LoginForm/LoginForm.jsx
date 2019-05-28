import React, {Component} from 'react';


class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    render(){
        return <div>
            <h3>Login Form!</h3>
        </div>
    }
}







export default LoginForm