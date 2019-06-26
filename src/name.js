import React, { Component } from 'react';

class Name extends Component {
  static getDerivedStateFromProps(props){
     // debugger
   return {name: `${props.firstName} Davidson`, age: 45 }
  }

  render() {
    return (
      <div>
        {this.state.name} is {this.state.age} years old!!!
      </div>
    );
  }
}

export default Name;
