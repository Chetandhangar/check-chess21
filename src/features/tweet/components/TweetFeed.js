import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {handleFetchFeed} from '../tweetSlice';
import {TweetDetails} from './TweetDetails';

export const TweetFeed = () => {
    const {token} = useSelector((state) => state.user);
    const {tweetsStatus,tweets,tweetPostStatus} = useSelector((state) => state.tweet);
    const dispatch = useDispatch();

    useEffect(() => {
        (async() => {
            if(tweetsStatus === "idle"){
                await dispatch(handleFetchFeed({token}))
            }
        })();
    },[tweetsStatus,dispatch,token])

    useEffect(() => {
            (async() => {
                if(tweetPostStatus === "success"){
                    await dispatch(handleFetchFeed({token}))
                }
            })();
    },[tweetPostStatus,dispatch,token])

    console.log(tweets,'from tweets feed componet')

    return(
        <div className="container">
             {tweets?.length <= 0 ? (
                 <div>
                     You dont have any Tweets .
                     Show.
                 </div>
             ) : 
             (
                (tweets?.map((tweet) => (
                    <TweetDetails key={tweet?._id} tweet={tweet}/>
                )))
             )
             }
        </div>
    )
}