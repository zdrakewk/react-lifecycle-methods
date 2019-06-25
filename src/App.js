import React, { Component } from 'react';
import './App.css';
import Name from './name'
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
        <Name name={this.state.name} />
      </div>
    );
  }
}

export default App;
