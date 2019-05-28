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
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}

export default App;
