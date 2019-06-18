import React from 'react';
import "./Tweet.css";

const Tweet = (props) =>{
    return (
      <div className="tweet">
        {props.tweet}
      </div>
    )
  }
  export {Tweet};