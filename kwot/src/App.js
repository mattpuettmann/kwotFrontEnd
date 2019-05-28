import React, {Component} from 'react';
import './App.css';
import LoginForm from './AuthGateway/LoginForm/LoginForm';
import RegistrationForm from './AuthGateway/RegistrationForm/RegistrationForm';

class App extends Component {
  render(){
    return (
      <div className="App">
        Welcome to KWÖT!
        <LoginForm></LoginForm>
        <RegistrationForm handleRegister={this.handleRegister}></RegistrationForm>
      </div>
    );
  }

  handleRegister = async (formData) => {
    console.log(formData);
    const response = await fetch("http://localhost:8000/users/registration", {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: 'include',
      headers: {
          "Content-Type": "application/json"
      }
    })
    const parsedResponse = await response.json();
    if(parsedResponse.status === 200){
      this.setState({
          loggedIn: true,
          username: parsedResponse.data.username,
          email: parsedResponse.data.email

      })
    }
  }







}

export default App;
