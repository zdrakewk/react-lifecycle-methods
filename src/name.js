import React, { Component } from 'react';

class Name extends Component {
  
  static getDerivedStateFromProps(props){
   return {name: `${props.firstName} Davidson`, age: 45 }
  }     //reture the new state object, state.name and state.age 

  render() {
    return (
      <div>
        {this.state.name} is {this.state.age} years old!!!
      </div>
    );
  }
}

export default Name;
