import React, {Component} from 'react';


class RegistrationForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
    }




    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }

    render(){
        return <div>
            <h4>Sign up:</h4>
            <form onSubmit={this.handleSubmit}>
                Username: <input onChange={this.handleChange} type="text" name="username"/><br/>
                Email: <input onChange={this.handleChange} type="text" name="email"/><br/>
                Password: <input onChange={this.handleChange} type="password" name="password"/><br/>
                <input type="submit"/>
            </form>
        </div>
    }
}







export default RegistrationForm