import React from 'react';
import "./Image.css";

const Image = (props) =>{
    return (
      <img src={props.image} alt="Logo" className="picture"/>
    )
  }
  export {Image};