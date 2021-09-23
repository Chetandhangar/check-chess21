import React from 'react'

import { UserStatus } from './UserStatus';
import useStyles from './profileStyle';
import {Card,CardHeader,Avatar,IconButton,CardContent,Typography} from '@material-ui/core'

export const ProfileBody = ({user}) => {

     const formatDate = (ISOString) => {
        const date = new Date(ISOString).toUTCString().substring(4, 16);
        return date;
     };
     const classes = useStyles();
    return(
        <div className={classes.paper}>
        <Card className={classes.root}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
             <img  
              style={{height: "auto", width : "100%"}}
              src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' 
              alt="Profile"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           <UserStatus user={user}/>
          </IconButton>
        }
        title={`${user?.firstName} ${" "} ${user?.lastName}`}
        subheader={`@${user?.username}`}
      />
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
       {user?.bio} 
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
       {`Joined ${formatDate(user?.createdAt)}`}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p" style={{marginTop : "1rem"}}>
          {`${user?.followingCount} Following ${"  "}
          ${user?.followersCount} Followers`}
      </Typography>
      </CardContent>
        </Card>
        </div>
    )
}

/*
<div className="container">
            <Card>
                <CardImg top width="100%" height="10%" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{user?.firstName} {" "} {user?.lastName}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{`@${user?.username}`}</CardSubtitle>
                    <CardText>{user?.bio}</CardText>
                    <CardText> Joined  {formatDate(user?.createdAt)}</CardText>
                    <CardText>{user?.followingCount} following  {" "}
                    {user?.followersCount} Followers
                    </CardText>
                    <UserStatus user={user}/>
                </CardBody>
            </Card>
        </div>
*/