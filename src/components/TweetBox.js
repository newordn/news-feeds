import React from 'react';
import "./TweetBox.css";
const TweetBox = (props)=>{
    return (
      <div className="tweet-body">
          {props.children}
      </div>
    )
  };
export {TweetBox};