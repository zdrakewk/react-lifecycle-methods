import React, { Component } from 'react';
import './App.css';
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
        <Name firstName={this.state.name} />
        <Lang />
      </div>
    );
  }
}

export default App;
