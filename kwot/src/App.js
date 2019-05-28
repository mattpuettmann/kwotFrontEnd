import React, {Component} from 'react';
import './App.css';
import LoginForm from './AuthGateway/LoginForm/LoginForm';
import RegistrationForm from './AuthGateway/RegistrationForm/RegistrationForm';
import {Switch, Route, Link } from 'react-router-dom';
import UserContainer from './UserContainer/UserContainer';
import AuthGateway from './AuthGateway/AuthGateway';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null,
      email: null
    }
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
    console.log(parsedResponse)
    if(parsedResponse){
      this.setState({
          loggedIn: true,
          username: parsedResponse.username,
          email: parsedResponse.email

      })
      console.log(this.state);
    }
  }
  render(){
    return (
      <div className="App">
        Welcome to KWÖT!
        {this.state.loggedIn ? 
        <Switch>
          <Route exact path="/" render={(props) => 
            <UserContainer username={this.state.username} loggedIn={this.state.loggedIn} email={this.state.email}/>} />
        </Switch>
        :
        <AuthGateway handleRegister={this.handleRegister}  handleLogin={this.handleLogin} handleGeo={this.handleGeo}/>}
        {/* <LoginForm></LoginForm>
        <RegistrationForm handleRegister={this.handleRegister}></RegistrationForm> */}
      </div>
    );
  }







}

export default App;
