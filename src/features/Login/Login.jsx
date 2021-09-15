import React, {useState} from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {API_ENPOINT} from '../../common/utils/utils'

export const Login = () =>{
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [loader , setLoader] = useState(false)
   // const loginurl = "https://check-chess21.chetandhangar.repl.co/api/login";

    async function handleLogin(e){
        e.preventDefault();
        try{
            setLoader(true)
            const response = await axios.post(`${API_ENPOINT}/api/login`, {
                email,
                password
            }) 
            console.log(response)
            if(response.status === 200){
                setLoader(false)
                setEmail("")
                setPassword("")
            }
        }catch(error){
            setLoader(false)
            console.log(error)
        }
       
    }
        return(
            <div className="container">
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(email => email = e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(password => password = e.target.value)}
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