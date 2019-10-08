import React, { Component } from 'react';

class Name extends Component {
  state ={
    name: '',
    age: 0
  }   //set default state to avoid console warning message

  static getDerivedStateFromProps(props){
   return {name: `${props.firstName} Davidson`, age: 45 }
  }     //reture object to updata new state , state.name and state.age

  render() {
    return (
      <div>
        <p><b>getDerivedStateFromProps</b> return new object before render() to update the state: </p>
        <p>{this.state.name} is {this.state.age} years old!!!</p>
      </div>
    );
  }
}

export default Name;
