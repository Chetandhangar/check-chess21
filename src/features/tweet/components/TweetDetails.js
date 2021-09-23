import React from 'react';
import {Link} from 'react-router-dom';
import {checkLikes,checkBookmarks} from '../../../common/utils/utils'
import {useSelector, useDispatch} from 'react-redux';
import {handleToggleLikeSubmit, handleToggleBookMark} from '../tweetSlice';
import useStyles from './TweetStyle';
import {Card,CardHeader,Avatar,Typography,CardContent,CardActions ,IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export const TweetDetails = ({tweet}) => {

    const formatDate = (ISOString) => {
        const date = new Date(ISOString).toUTCString().substring(4, 16);
        return date;
     };
     const classes  = useStyles();

     const {currentUser,token} = useSelector((state) => state.user)
     const dispatch = useDispatch();

    return(
      <div className={classes.paper}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        <Link to={`/profile/${tweet?.user?.username}`}>
                        <img  
                        style={{height: 35, width : 35}}
                        src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' 
                        alt="Profile"/>
                        </Link>
                        </Avatar>
                    }
                    action={
                    <Typography style={{fontSize : "0.8rem"}}>.{formatDate(tweet?.createdAt)}</Typography>
                    }
                    title={tweet?.user?.firstName && <Link
                    className="bg-light text-dark"
                    to={`/profile/${tweet?.user?.username}`}>
                        {tweet?.user?.firstName} {" "} {tweet?.user?.lastName}
                    </Link>}
                    subheader={tweet?.user?.username &&
                     <Link to={`/profile/${tweet?.user?.username}`}
                     className="bg-light text-dark">
                        {`@${tweet?.user?.username}`}
                    </Link>}
                />
                  <CardContent>
                      <Typography>
                          {tweet?.tweet}
                      </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                  <IconButton aria-label="add to likes"
                  onClick={() => dispatch(handleToggleLikeSubmit({id :tweet?._id,token}))}
                  >
                        {!checkLikes(currentUser?.liked , tweet?._id) ? (
                           <> <FavoriteIcon /> {tweet?.likesCount}</>
                        ) : 
                        (
                            <> <FavoriteIcon style={{color : "red"}}/> {tweet?.likesCount}</>
                        )
                        }
                  </IconButton>
                  <IconButton aria-label="add to bookmarks"
                   onClick={() => dispatch(handleToggleBookMark({id : tweet?._id, token}))}>
                        {!checkBookmarks(currentUser?.bookmarked,tweet?._id) ? (
                            <> <BookmarkBorderOutlinedIcon /> </>
                        ) :
                        (
                            <> <BookmarkIcon /> </>
                        )
                        }
                  </IconButton>
                  </CardActions>
            </Card>
      </div>
    )
}
