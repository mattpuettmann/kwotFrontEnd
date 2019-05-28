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
    console.log(response.statusText)
    const parsedResponse = await response.json();
    console.log(parsedResponse)
    console.log(response.status)
    if(response.status === 201){
      this.setState({
          loggedIn: true,
          username: parsedResponse.username,
          email: parsedResponse.email
      })    
    }
  }

  handleLogin = async (formData) => {
    console.log(formData);
    try{
      const loginResponse = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })  
      const parsedLoginResponse = await loginResponse.json();
      console.log(loginResponse)
      console.log(parsedLoginResponse)
      if(loginResponse.status === 201){
        this.setState({
          loggedIn: true,
          username: formData.username,
          password: formData.password
        })
      }
    }catch(err){
      console.log(err);
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
