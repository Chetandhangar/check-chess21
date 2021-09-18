import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {checkLikes,checkBookmarks} from '../../../../common/utils/utils';
import {handleToggleBookMark,handleToggleLikeSubmit} from '../../../tweet/tweetSlice';
import {handleFetchUserProfile} from '../../userSlice'


export const UserProfileTweet = ({tweet}) => {

    const dispatch = useDispatch();
    const {token,currentUser}  = useSelector((state) => state.user);
   

    const formatDate = (ISOString) => {
        const date = new Date(ISOString).toUTCString().substring(4, 16);
        return date;
     };

     const handleToggleBookMarkSubmit = async({id,token}) => {
        await dispatch(handleToggleBookMark({id,token}));
        await dispatch(handleFetchUserProfile({username : currentUser?.username,token}))
     } 
     const handleToggleLike = async({id , token}) => {
         await dispatch(handleToggleLikeSubmit({id , token}));
         await dispatch(handleFetchUserProfile({username : currentUser?.username , token}))
     }

    return (
        <div className="container">
        <div className="card">
            <div className="row">
                <div className="col">
                    <Link to={`/profile/${tweet?.user?.username}`}>
                        <img 
                        style={{height: 30, width : 30, cursor : "pointer"}}
                            className="rounded-circle rounded-sm inline-block" 
                            src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                            alt="profile"
                            />
                    </Link>
                </div>
                <div className="col">
                    <Link to={`/profile/${tweet?.user?.username}`}
                    className="bg-light text-dark"
                    >
                    <span>{tweet?.user?.firstName}{" "}{tweet?.user?.lastName}</span>
                    </Link>
                   
                </div>
                <div className="col">
                <Link to={`/profile/${tweet?.user?.username}`}
                    className="bg-light text-dark"
                    >
                    <span className="card-subtitle">@{tweet?.user?.username}</span>
                    </Link>
                </div>
                <div className="col">
                    .{formatDate(tweet?.createdAt)}
                </div>
            </div>
            <div className="text-center"
            style={{paddingTop : "2rem"}}>
                <p>{tweet?.tweet}</p>
            </div>
            <div className="text-center">
                <div className="text-center">
                    {!checkLikes(currentUser?.liked, tweet?._id) ? (
                          <button 
                          className="btn bg-transparent"
                          style={{cursor : "pointer"}}
                          onClick={() =>handleToggleLike({id :tweet?._id,token})}
                          >
                          <span
                          className="fa fa-heart-o fa-sm"
                          aria-hidden="true"
                            >{tweet?.likesCount}</span>
                          </button>
                    )  :
                    (
                        <button
                         className="btn bg-transparent"
                         onClick={() => handleToggleLike({id :tweet?._id,token})}
                         >
                       <span
                       className="fa fa-heart fa-sm"
                       aria-hidden="true"
                       >{tweet?.likesCount}</span>
                       </button>

                    )
                }
              
              {
                  !checkBookmarks(currentUser?.bookmarked, tweet?._id) ? (
                    <button 
                    className="btn bg-transparent"
                    onClick={() => handleToggleBookMarkSubmit({id : tweet?._id, token})}
                    ><span
                    className="fa fa-bookmark-o" aria-hidden="true"></span>
                    </button>
                  ) : 
                  <button 
                    className="btn bg-transparent"
                    onClick={() => handleToggleBookMarkSubmit({id : tweet?._id, token})}>
                    <span
                    className="fa fa-bookmark" aria-hidden="true"></span>
                    </button>
              }
                
                </div>
           
                
            </div>
        </div>
    </div>
    );
  
}