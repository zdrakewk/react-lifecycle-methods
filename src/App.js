import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import chart from './lifecyclechart.jpeg';
import Name from './name';
import Lang from './lang';
import RecursiveColor from './components/recursiveColor';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>Learn React LifeCycle</p>
          <p>
            getDerivedStateFromProps, componentDidMount, shouldComponentUpdate, componentWillUnmount
          </p>
        </header>
        <RecursiveColor opacity={1}/>

        <Name firstName={this.state.name} />
        <Lang />
        <br/>
        <img id='chart1' src={chart} alt="LifeCycle Chart" />
        <br />

      </div>
    );
  }
}

export default App;
