import React, { Component } from 'react';

class Name extends Component {
  static getDerivedStateFromProps(props){
    // debugger
   return {name: `${props.name} Davis` }
  }

  render() {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
}

export default Name;