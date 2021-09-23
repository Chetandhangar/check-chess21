import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {handleUserSignUp} from '../../../userSlice';
import {Container,CssBaseline,Typography,Avatar,TextField,Grid,Link,
    Button} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './SignupStyle';

export const SignUp= () =>{
    const [user , setUser ] = useState({
        firstName : "",
        lastName : "",
        username : "",
        email : "",
        password : ""
    })
    const [loader , setLoader] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {signUpStatus} = useSelector((state) => state.user);
    const classes = useStyles();

    function handleSignup(e){
        e.preventDefault();
        dispatch(handleUserSignUp(user))
    }

    function handleOnChangeInput(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    useEffect(() => {
        if(signUpStatus === "signupSuccess"){
            setLoader(false)
            navigate('/login')
        }if(signUpStatus === 'loading'){
            setLoader(true)
        }
        if(signUpStatus === "error"){
            setLoader(false)
        }
    },[signUpStatus,navigate])

        return(
            <Container  component="main" maxWidth="xs">
         <CssBaseline>
             <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSignup}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            autoFocus
                            value={user.firstName}
                            onChange={(e) => handleOnChangeInput(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastname"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            value={user.lastName}
                            onChange={(e) => handleOnChangeInput(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            value={user.username}
                            onChange={(e) => handleOnChangeInput(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={user.email}
                            onChange={(e) => handleOnChangeInput(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={user.password}
                            onChange={(e) => handleOnChangeInput(e)}
                        />
                    </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                       {loader ? "Registering..." : "Sign Up"}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                </Grid>
                </form>
             </div>
         </CssBaseline>
       </Container>
        )
}