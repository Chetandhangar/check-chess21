import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 650,
    backgroundColor: theme.palette.background.paper,
    marginTop : theme.spacing(3)
  },
}));

export const ExploreHeader = () =>{
    const classes = useStyles();
    return(
        <List className={classes.root}>
        <Link to="/feed"  className="bg-light text-dark">
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ArrowBackIcon />
                </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Explore" />
        </ListItem>
        </Link>
        </List>
        
    )
}