import React from 'react';
import {UserProfileTweet} from '../../components/BookMark/UserProfileTweet' 

export const ProfileTimeLine = ({user}) => {
    return(
        <div>
             {user?.tweets?.length <= 0 ? (
                    <div>Don't hava any BookMarks yet</div>
                ): 
                (
                    user?.tweets?.map((tweet) => {
                        return(
                            <UserProfileTweet key={tweet?._id} tweet={tweet}/>
                        )
                    })
                )
                }
        </div>
    )
}