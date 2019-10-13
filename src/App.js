import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import chart from './lifecyclechart.jpeg';
import Name from './name';
import Lang from './lang';
import RecursiveColor from './components/recursiveColor';
import Triangle from './components/triangle';


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
        {/*
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Learn React LifeCycle</p>
          </header>
          */}

        <RecursiveColor opacity={0.5}/>
        <Triangle n={10}/>

        <Lang />
        <br/>
        <img id='chart1' src={chart} alt="LifeCycle Chart" />
        <br />
        <Name firstName={this.state.name} />

      </div>
    );
  }
}

export default App;
