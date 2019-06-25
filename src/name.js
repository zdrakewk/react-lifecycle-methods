import React, { Component } from 'react';

class Name extends Component {
  static getDerivedStateFromProps(props){
    // debugger
   return {name: `${props.firstName} Davis`, age: 75 }
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