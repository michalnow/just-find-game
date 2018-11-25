import React from 'react';
import Login from '../components/Login/Login'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
    render() {
      return (
        <Login />
      );
    }
  }