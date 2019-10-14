import React from 'react';

const ImRecursive = (props) => {
  return (
    <div className={props.child ? "parent" : "child"}>
      <p>This is the {props.child ? "parent Element" : "Child Element"}</p>
      {props.child && <ImRecursive />}
    </div>
  )
}

export default ImRecursive;
