import React, {useState,useEffect} from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap'
import {Link} from 'react-router-dom';
import {handleLoginUser} from '../../userSlice'
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from  'react-router-dom'

export const Login = () =>{
    const [user,setUser] = useState({
        email : "",
        password : ""
    })
    const [loader , setLoader] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {logInStatus,token} =useSelector((state) => state.user)

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
            <div className="container">
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={user.email}
                        onChange={(e) => handleOnChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={(e) =>handleOnChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit" value="submit">{loader ? <p>Loading...</p> 
                        : <p>Login</p>}</Button>
                    </FormGroup>
                    <FormGroup>
                        <p>Don't have an account <Link to="/signup">SignUp</Link></p>
                    </FormGroup>
                </Form>
            </div>
        )
}