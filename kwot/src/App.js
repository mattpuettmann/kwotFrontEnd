import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
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

  handleLogout =  () => {
    console.log('logout button clicked!')
    this.setState({
      loggedIn: false
    })
  }



  render(){
    return (
      <div className="App">
        Welcome to KWÖT!
        {this.state.loggedIn ? 
        <Switch>
          <Route exact path="/" render={(props) => 
            <UserContainer username={this.state.username} loggedIn={this.state.loggedIn} email={this.state.email} handleLogout={this.handleLogout}/>} />
        </Switch>
        :
        <AuthGateway handleRegister={this.handleRegister}  handleLogin={this.handleLogin} handleGeo={this.handleGeo}/>}
      </div>
    );
  }







}

export default App;
