import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FollowButton} from '../Buttons/FollowButton'

export const ExploreProfile = ({userDetails , user}) => {
    const {currentUser} = useSelector((state) => state.user)
    return(
     <div className="container"> 
     <div className="card">
        <Link to={`/profile/${user?.username}`}>
            <img 
            style={{height: 20, width : 20}}
                className="rounded-circle rounded-sm inline-block" 
                src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                alt="profile"
                />
        </Link>
        <Link 
        to={`/profile/${user?.username}`}
        >
        <h5 className="card-title">{user?.firstName}{" "} {user?.lastName}</h5>
        <span className="card-subtitle">@{user?.username}</span>
        </Link>
        <div>
           {currentUser?._id !== user._id && (
               <FollowButton user={user}/>
           )
           }
        </div>
     </div>
    </div>
 
    )
}
