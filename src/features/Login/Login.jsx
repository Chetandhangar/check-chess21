import React, {useState} from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export const Login = () =>{
    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
        setPassword("")
        setUsername("")
    }
        return(
            <div className="container">
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Input 
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(username => username = e.target.value)}
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
                        <Button color="primary" type="submit" value="submit">Login</Button>
                    </FormGroup>
                    <FormGroup>
                        <p>Don't have an account <Link to="/signup">SignUp</Link></p>
                    </FormGroup>
                </Form>
            </div>
        )
}