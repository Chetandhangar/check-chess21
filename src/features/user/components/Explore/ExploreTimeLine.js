import React from 'react';
import {useSelector} from 'react-redux'
import {ExploreProfile} from './ExploreProfile'
import {ExploreHeader} from './ExploreHeader';

export const ExploreTimeLine = () => {
    const {currentUser, users} = useSelector((state) => state.user)
    return(
        <div className="conainer">
        <div>
            <ExploreHeader />
        </div>
         {users.map((user) => {
             return(
                 currentUser?._id !== user?._id && (
                     <ExploreProfile 
                     key={user?._id}
                     userDetails = {user}
                     user = {user}
                     />
                 )
         )
         })}
        </div>
    )
}