import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {handleLoginUser} from '../../../userSlice'
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from  'react-router-dom';
import useStyles from './loginStyle';
import {Container,CssBaseline,Typography,Avatar,TextField,
    Button} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const Login = () =>{
    const [user,setUser] = useState({
        email : "",
        password : ""
    })
    const [loader , setLoader] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {logInStatus,token} =useSelector((state) => state.user)
    const classes = useStyles();
    async function handleLogin(e){
        e.preventDefault();
       dispatch(handleLoginUser(user))
    }
  
    
    function handleOnChange(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

   useEffect(() => {
    if (token) {
       navigate('/feed');
    }
 });
    useEffect(() => {
        if(logInStatus === "loading"){
            setLoader(true)
        }
        if(logInStatus === "loginSuccess"){
            setLoader(false)
            navigate('/feed')
        }
        if(logInStatus === "error"){
            setLoader(false)
        }
    },[logInStatus,navigate])
        return(
            <Container component="main" maxWidth="xs">
            <CssBaseline>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={user.email}
                        onChange={(e) => handleOnChange(e)}
                    />
                     <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={user.password}
                        onChange={(e) => handleOnChange(e)}
                    />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                       {loader ? "Signing..." : "Sign In"}
                    </Button>
                    <Typography>
                    <Link to="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Typography>
                    </form>
                </div>
            </CssBaseline>
        </Container>
        )
}