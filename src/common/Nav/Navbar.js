import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {handleFetchUserProfile} from '../../features/user/userSlice';
import {makeStyles} from '@material-ui/core/styles';
import {Home} from '@material-ui/icons'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PersonIcon from '@material-ui/icons/Person';
import {List , ListItem, ListItemIcon,ListItemText} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
        marginTop: theme.spacing(4),
        alignItems: 'center',
      },
  }));

export const RenderNav = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {token,currentUser : {username}} = useSelector((state) => state.user);
    return(
        <div className={classes.paper}>
       <div className={classes.root}>   
        <List component="nav" aria-label="main mailbox folders">
         <Link to="/feed" className="bg-light text-dark">
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        </Link>
        <Link to="/explore" className="bg-light text-dark">
        <ListItem button>
          <ListItemIcon>
          <span className="fa fa-hashtag fa-lg"></span>
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        </Link>
        <Link to="/bookmark" className="bg-light text-dark">
        <ListItem button>
          <ListItemIcon>
            <BookmarkIcon/>
          </ListItemIcon>
          <ListItemText primary="BookMarks" />
        </ListItem>
        </Link>
        <Link to={`/profile/${username}`} 
        className="bg-light text-dark"
         onClick={() => dispatch(handleFetchUserProfile({
            username:username,
            token
        }))}>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        </Link>
        </List>  
       </div>
       </div>
    )
}

/*<React.Fragment>
<Nav navbar>
         <NavItem>
         <Link className="nav-link" to='/feed' style={{cursor : "pointer"}}>
               <span className="fa fa-home fa-lg"></span>Home</Link>
         </NavItem>
         <NavItem>
         <Link className="nav-link" to='/explore' style={{cursor : "pointer"}}>
               <span className="fa fa-hashtag fa-lg">Explore</span></Link>
         </NavItem>
         <NavItem>
         <Link className="nav-link" to='/bookmark' style={{cursor : "pointer"}}>
               <span className="fa fa-bookmark fa-lg">Bookmarks</span></Link>
         </NavItem>
         <NavItem>
         <Link  className="nav-link" to={`/profile/${username}`} style={{cursor : "pointer"}}
          onClick={() => dispatch(handleFetchUserProfile({
             username:username,
             token
         }))}
         >
        <span className="fa fa-user fa-lg"></span>Profile</Link>
         </NavItem>

       
    
     </Nav>
</React.Fragment>
*/