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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return <div>
            <h4>Login:</h4>
            <form onSubmit={this.handleSubmit}>
                Username: <input onChange={this.handleChange} type="text" name="username"/><br/>
                Password: <input onChange={this.handleChange} type="password" name="password"/><br/>
                <input type="submit"/>
            </form>
        </div>
    }
}







export default LoginForm