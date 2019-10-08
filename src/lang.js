import React, { Component } from 'react';

class Language extends Component {
  state = { language: 'React'}

  // shouldComponentUpdate(nextProps, nextState) {

  //   if (this.state.language === nextState.language) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  componentDidMount(){    //this is 2nds timer to change the language without click on change button.
    setTimeout(()=>{
      this.setState({language: 'Vue'})
    }, 2000)
  }                   

  // componentDidMount(){
  //   this.inteval = setInterval(()=>{
  //        // alert('hello"; 9000')
  //        // console.log(this.interval)
  //   }) //call 3rd party to fectch data
  // }

  // componentWillUnmount() {      //unmount
  //   clearInterval(this.inteval)
  // }


  changeLang = (e) => {
    e.preventDefault();
    this.setState({language: 'Vue'})
  }

  resetPage = (e) => {
    e.preventDefault(); 
    window.location.reload();
  }

  render() {
    // console.log("rendering component")
    return (
      <div>
        <br /><hr />
        <br /><hr />
        The current language is set by a timer and it will change to: <mark>{this.state.language}</mark>
        <br/>
        <button onClick={this.changeLang}>Change Language manually</button>
        <br/>
        <button onClick={this.resetPage}>Reset page</button>
      </div>
    );
  }
}

export default Language;
