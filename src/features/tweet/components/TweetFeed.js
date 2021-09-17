import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {handleFetchFeed} from '../tweetSlice';
import {handleFetchUser} from '../../user/userSlice'
import {TweetDetails} from './TweetDetails';

export const TweetFeed = () => {
    const {token,currentUser} = useSelector((state) => state.user);
    const {tweetsStatus,tweets,tweetPostStatus,tweetLikedStatus} = useSelector((state) => state.tweet);
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

    useEffect(() => {
        (async() => {
            if(tweetLikedStatus === "success"){
                await dispatch(handleFetchUser({username : currentUser?.username,token}))
                await dispatch(handleFetchFeed({token}))
            }
        })();
    },[token,dispatch,tweetLikedStatus])


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