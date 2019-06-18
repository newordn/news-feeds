import React from 'react';
import "./Name.css";
const Name = (props)=>{
    return (
      <div className="name">
        {props.name}
      </div>
    )
  }

  export {Name};