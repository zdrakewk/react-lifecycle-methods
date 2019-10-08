import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Name from './name'
import Lang from './lang'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joey'
    }
  }

  // this.state = {
  //   name: 'Hank'
  // }

  render() {
    return (
      <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Learn React LifeCycle
        </a>
      </header>

        <Name firstName={this.state.name} />
        <Lang />
      </div>
    );
  }
}

export default App;
