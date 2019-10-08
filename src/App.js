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
          <p>
            Learn React LifeCycle, getDerivedStateFromProps, componentDidMount, shouldComponentUpdate, componentWillUnmount
          </p>
        </header>


        <Name firstName={this.state.name} />
        <Lang />
      </div>
    );
  }
}

export default App;
