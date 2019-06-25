import React, { Component } from 'react';

class Language extends Component {
  state = { language: 'React'}

  componentDidMount(){
    setTimeout(()=>{
      this.setState({language: 'Vue'})
    }, 2000)
  }

  render() {
    return (
      <div>
        <br /><hr />
        {this.state.language}
      </div>
    );
  }
}

export default Language;