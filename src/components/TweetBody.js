import React from 'react';
import {TweetBox} from "./TweetBox.js";
import {Image} from "./Image.js";
import {Name} from "./Name.js";
import {Handle} from "./Handle.js";
import {Tweet} from "./Tweet.js";

const TweetBody = (props)=>{
    return (
        <TweetBox>
            <div className="inner-body">
                <Image image={props.image}/>
                <div className="body">
                    <div className="inner-body">
                        <Name name={props.name}/>
                        <Handle handle={props.handle}/>
                    </div>
                    <Tweet tweet={props.tweet}/>

                </div>
            </div>
        </TweetBox>
    )
}
export  {TweetBody};