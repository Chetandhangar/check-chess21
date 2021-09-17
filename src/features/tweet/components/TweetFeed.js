import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {handleFetchFeed} from '../tweetSlice';
import {handleFetchUser} from '../../user/userSlice'
import {TweetDetails} from './TweetDetails';

export const TweetFeed = () => {
    const {token,currentUser} = useSelector((state) => state.user);
    const {tweetsStatus,tweets,tweetPostStatus,tweetLikedStatus,tweetBookmarkStatus} = useSelector((state) => state.tweet);
    const dispatch = useDispatch();
    const username = currentUser?.username

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
                await dispatch(handleFetchUser({username,token}))
                await dispatch(handleFetchFeed({token}))
            }
            if(tweetBookmarkStatus === "success"){
                await dispatch(handleFetchUser({username,token}))
                await dispatch(handleFetchFeed({token}))
            }
        })();
    },[token,dispatch,tweetLikedStatus,username,tweetBookmarkStatus])


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