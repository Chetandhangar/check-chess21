import React,{useEffect} from 'react';
import {BookMarkHeader} from './BookMarkHeader';
import {UserProfileTweet} from './UserProfileTweet'
import {useSelector,useDispatch} from 'react-redux';
import {handleFetchUserProfile} from '../../userSlice'


export const BookMarkTimeLine  = () => {
    
    const {currentUser,userProfile ,token} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const username = currentUser?.username

    useEffect(() => {
        (async() => {
          await dispatch(handleFetchUserProfile({username , token}))
        })()
    },[username , token,dispatch])

    

    return(
        <div className="container">
                <BookMarkHeader />
                {userProfile?.bookmarked.length <= 0 ? (
                    <div>Don't hava any BookMarks yet</div>
                ): 
                (
                    userProfile?.bookmarked?.map((tweet) => {
                        return(
                            <UserProfileTweet key={tweet?._id} tweet={tweet}/>
                        )
                    })
                )
                }
              
        </div>
    )
}