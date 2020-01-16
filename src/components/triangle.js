import React from 'react';

const printTriangle = (n) => {
  let j = '';
  for (let i = 0; i < n; i++ ) {
    j = j.concat('*')
  }
  return j;
}

const Triangle = (props) => {

  return (
    <div>
      {printTriangle(props.n)}
      {props.n >0 ? <Triangle n={props.n - 1}/>  : <div></div>}   {/*the recursive component will call itself, base case is when n is 0. when n equal to 1, the component will render a star. */}
    </div>
  )
}

export default Triangle;
