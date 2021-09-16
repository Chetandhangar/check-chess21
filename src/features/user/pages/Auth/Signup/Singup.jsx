import React, {useState, useEffect} from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {handleUserSignUp} from '../../../userSlice'

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
            <div className="container">
                <Form onSubmit={handleSignup}>
                <FormGroup>
                        <Input 
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="firstName"
                        value={user.firstName}
                        onChange={(e) => handleOnChangeInput(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="lastName"
                        value={user.lastName}
                        onChange={(e) => handleOnChangeInput(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={user.email}
                        onChange={(e) => handleOnChangeInput(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) => handleOnChangeInput(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={(e) => handleOnChangeInput(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit" value="submit">{loader ? <p>Loading..</p>
                         : <p>SignUp</p>}</Button>
                    </FormGroup>
                </Form>
            </div>
        )
}