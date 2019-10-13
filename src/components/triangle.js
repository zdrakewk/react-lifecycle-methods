import React from 'react';

const printTriangle = (n) => {
  let j = '';
  for (let i = 0; i < n; i++ ) {
    j = j.concat('*')
    // debugger
  }
  return j;
}

const Triangle = (props) => {

  return (
    <div>
      {printTriangle(props.n)}
      {props.n >0 ? <Triangle n={props.n - 1}/>  : <div>*</div>}
    </div>
  )
}

export default Triangle;
