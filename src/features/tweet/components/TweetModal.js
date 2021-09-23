import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {handlePostTweet} from '../tweetSlice';
import useStyles from './TweetStyle';
import {Card,CardHeader,Avatar,CardContent,TextField,Button,
    CardActions ,} from '@material-ui/core';


export const TweetModal = () => {
    const [tweet , setTweet] = useState("");
    const {token} = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const handleTweetSubmit = () =>{
        console.log("button click ye he tweet", tweet);
        dispatch(handlePostTweet({tweet,token}))
        setTweet("")
    }
    const classes = useStyles();

    return(
        <div className={classes.paper}>
            <Card className={classes.rootTweet}>
                <CardHeader 
                avatar = {
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <img  
                        style={{height: 50, width : 50}}
                        src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' 
                        alt="Profile"/>
                    </Avatar> 
                }
                />
                <CardContent>
                    <TextField
                       margin="normal"
                       required
                       multiline
                       fullWidth
                       id="tweet"
                       label="What's happening ?"
                       name="tweet"
                       autoComplete="tweet"
                       rows={4}
                       autoFocus
                       value={tweet}
                       onChange={(e) => setTweet(tweet => tweet = e.target.value)}
                    />
                </CardContent>
                <CardActions disableSpacing>
                   <Button variant="outlined"  color="primary" className={classes.btnTweet}
                   onClick={() => handleTweetSubmit()}>
                       Tweet
                   </Button>
                </CardActions>
            </Card>
        </div>
    )
}
/*
<div className="container">
<div className="card">
    <div className="card-body">
        <div className="row">
            <div className="col-3">
                <img 
                style={{height: 50, width : 50}}
                className="rounded-circle rounded-sm inline-block" 
                src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                alt="profile"
                />
            </div>
            <div className="col-md-5">
                    <textarea 
                    value={tweet}
                    className="form-control form-control-lg"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="What's happening ?"
                    onChange={(e) => setTweet(tweet => tweet = e.target.value)}
                    />
            </div>
         </div>
         <div className="row" style={{paddingTop : "2rem"}}>
            <div className="col-4"></div>
            <div className="col-4">
                <Button
                onClick={() => handleTweetSubmit()}
                >Tweet</Button>
            </div>
         </div>
    </div>
</div>

</div>
*/