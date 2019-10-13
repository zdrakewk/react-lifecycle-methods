import React from 'react';
import LearnLogo from './learnLogo';

const RecursiveColor = (props) => {
  return (
    <div className='color-box' style={{opacity: props.opacity}} >

      {props.opacity < 1 ? <RecursiveColor opacity={props.opacity + 0.2}/> : <LearnLogo />}

    </div>
  )
}

export default RecursiveColor;
