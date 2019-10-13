import React from 'react';

const RecursiveColor = (props) => {
  return (
    <div className='color-box' style={{opacity: props.opacity}} >

      {props.opacity >= 0.2 ? <RecursiveColor opacity={props.opacity - 0.2}/> : null}

    </div>
  )
}

export default RecursiveColor;
