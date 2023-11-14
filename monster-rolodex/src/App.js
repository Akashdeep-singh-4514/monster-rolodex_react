// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>console.log(response.json()))
  }

  render(){
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}
export default App;
