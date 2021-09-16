import React from 'react';
import {ProfileHeader} from './ProfileHeader';
import {ProfileBody} from './ProfileBody';
import {ProfileTimeLine} from './ProfileTimeLine'
import {useSelector } from 'react-redux'

export const ProfileCard = () =>{
    const {userProfile} = useSelector((state) => state.user)
    console.log(userProfile,'userprofile from profile card')
    return(
        <div>
          <ProfileHeader user={userProfile} />
          <ProfileBody user={userProfile}/>
          <ProfileTimeLine user={userProfile}/>
        </div>
    )
}

