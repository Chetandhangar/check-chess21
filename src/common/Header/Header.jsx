import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {  handleLogOutUser } from '../../features/user/userSlice';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link,useNavigate} from 'react-router-dom'
import Home from '@material-ui/icons/Home'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Header = () => {
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.user)
    const navigate = useNavigate()
 
    const handleLogin = () =>{
      navigate('/login')
    };


      const classes = useStyles();

    return(
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{color : "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Home />
          </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {"Check"}
          </Typography>
          {token ? ( <Button onClick={() => dispatch(handleLogOutUser())} color="inherit">Logout</Button>) :
           (
              <Button onClick={() => handleLogin()} color="inherit">Login</Button>
            )}
        
        </Toolbar>
      </AppBar>
    </div>
    )
}

