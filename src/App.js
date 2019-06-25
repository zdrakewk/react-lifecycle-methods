import React, { Component } from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joey'
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.name}
      </div>
    );
  }
}

export default App;
