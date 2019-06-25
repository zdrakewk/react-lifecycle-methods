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
        <Name firstName={this.state.name} />
      </div>
    );
  }
}

export default App;
