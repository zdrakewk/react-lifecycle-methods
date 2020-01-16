import React, { Component } from 'react';

class StylingTest extends Component {


  render() {

    return (
      <div>
        <div>

          <h4 id ='hero' className="super" style={{color: 'grey'}}>The Flash</h4>
          <p>The Flash is a fictional superhero in comic books.</p>

        </div>
        <div>
          <h4 className="super">Reverse Flash</h4>
          <p>Reverse Flash is a supervillain in comic books.
          <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
        </p>
      </div>

      </div>
    )
  }

}

export default StylingTest;
