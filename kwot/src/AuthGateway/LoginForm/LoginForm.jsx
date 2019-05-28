import React, {Component} from 'react';


class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }
    render(){
        return <div>
            <h4>Login:</h4>
            <form>
                Username: <input type="text" name="username"/><br/>
                Email: <input type="text" name="email"/><br/>
                Password: <input type="password" name="password"/><br/>
                <input type="submit"/>
            </form>
        </div>
    }
}







export default LoginForm