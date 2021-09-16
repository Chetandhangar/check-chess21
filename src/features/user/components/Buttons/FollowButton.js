import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {checkFollow} from '../../../../common/utils/utils';
import {Button} from 'reactstrap';
import {handleFetchUser,handleFetchUserProfile,handleFollow,handleUnFollow} from '../../userSlice'

export const FollowButton = ({user}) => {
    const {currentUser, userProfile , token} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleFollowSubmit = async () => {
        await dispatch(handleFollow({ id: user?._id, token }));
        await dispatch(
           handleFetchUser({ username: currentUser?.username, token }),
        );
        await dispatch(
           handleFetchUserProfile({ username: userProfile?.username, token }),
        );
     };
  
     const handleUnFollowSubmit = async () => {
        await dispatch(handleUnFollow({ id: user?._id, token }));
        await dispatch(
           handleFetchUser({ username: currentUser?.username, token }),
        );
        await dispatch(
           handleFetchUserProfile({ username: userProfile?.username, token }),
        );
     };

    return(
        <div>
         {
         !checkFollow(currentUser?.following,user?._id) ?
         (
         <Button
            onClick={() => handleFollowSubmit()}> 
            Follow
        </Button> 
         )
        :
        (
        <Button
        onClick={() => handleUnFollowSubmit()}
        >
        Following
        </Button> 
        )  
        }
        </div>
    )
}