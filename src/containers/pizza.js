import React, { Component } from 'react';
import toppingOptions from '../data/pizzaToppingOptions'
import OptionsList from '../components/pizzaOptionsList'

class Pizza extends Component {

  state={
    selectedOptions: {}
  }

  render() {
    const topping = {toppingOptions}

    console.log({topping})
    return (
      <div>
        <h3>Toppings</h3>
        <OptionsList options={topping}/>
      </div>
    )
  }

}

export default Pizza;
