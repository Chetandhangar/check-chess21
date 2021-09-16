import React from 'react';
import {useSelector} from 'react-redux'
import {} from '../../userSlice';
import {Button} from 'reactstrap'

export const UserStatus = ({user})  =>{
    const {currentUser} = useSelector((state) => state.user)
    return(
        <div>
           {currentUser?._id !== user?._id ? 
           <Button>Follow</Button> 
            : 
            <Button>Edit Profile</Button>
        }
        </div>
    )
}