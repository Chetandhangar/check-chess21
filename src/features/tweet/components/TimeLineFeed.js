import React from 'react';
import {TweetModal} from './TweetModal';
import {TweetFeed} from './TweetFeed'

export const TimeLineFeed = () => {
    return(
        <div className="container">
            <div className="">
                <TweetModal />
            </div>
            <div className="">
                <TweetFeed />
            </div>
             
        </div>
    )
}