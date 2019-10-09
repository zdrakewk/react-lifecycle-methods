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
    if (this.state.language === 'Vue') {
      this.setState({language: 'Angular'})
    } else if (this.state.language === 'Angular') {
      this.setState({language: 'No more options, please reset'})
    }
  }

  resetPage = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  render() {
    // console.log("rendering component")
    return (
      <div>
        <br /><hr/>
        <li>
          Four stage of Component LifeCycle: Pre-mounting, Mouting, Updateing, Unmounting.
        </li>
        <li>
          In <b>componentDidMount</b> method invoked after render(), use a setTimeout method to change language automatically: <mark>{this.state.language}</mark>
        </li>

        <br/>
        <button onClick={this.changeLang}>Change Language manually</button>
        <br/>
        <button id='chart1' className='chart1' onClick={this.resetPage}>Reset page</button>
        <li>
          <b>shouldComponentUpdate</b> will return a boolean. We can put a condition compare this.state.language and nextState.lanugage.
        </li>
        <li>
          <b>componentWillUnmount</b>, which is called just before the component gets deleted. This is used to clear out any stuff set up in <b>componentDidMount</b>.
        </li>
        <li>
          Deprecated methods:
          componentWillReceiveProps, componentWillMount, componentWillReceiveProps, componentWillUpdate
        </li>
      </div>
    );
  }
}

export default Language;
