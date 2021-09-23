import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FollowButton} from '../Buttons/FollowButton';
import useStyles from './ExploreStyles';
import {Card,CardHeader,Avatar,IconButton} from '@material-ui/core'

export const ExploreProfile = ({userDetails , user}) => {
    const {currentUser} = useSelector((state) => state.user)
    const classes = useStyles()
    return(
        <div className={classes.paper}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <Link to={`/profile/${user?.username}`}>
              <img  
              style={{height: 35, width : 35}}
              src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' 
              alt="Profile"/>
             </Link>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
               {currentUser?._id !== user._id && (
               <FollowButton user={user}/>
             )
             }
            </IconButton>
          }
          title={user?.firstName && <Link to={`/profile/${user?.username}`}>
             {user?.firstName} {" "} {user?.lastName}
          </Link>}
          subheader={user?.username && <Link to={`/profile/${user?.username}`}>
              {`@${user?.username}`}
          </Link>}
        />
        </Card>
        </div>
    )
}
