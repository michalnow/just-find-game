import React from 'react';
import Login from '../components/Login/Login'

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
    render() {
      return (
        <Login />
      );
    }
  }