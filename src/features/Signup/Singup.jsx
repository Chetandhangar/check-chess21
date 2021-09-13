import React, {useState} from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export const SignUp= () =>{
    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const [firstname ,setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [bio , setBio] = useState("")
   // const [profileImg , setProfileImg] = useState("")

    function handleLogin(e){
        e.preventDefault();
        setPassword("")
        setUsername("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setBio("")
    }
        return(
            <div className="container">
                <Form onSubmit={handleLogin}>
                <FormGroup>
                        <Input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="firstname"
                        value={firstname}
                        onChange={(e) => setFirstName(firstname => firstname = e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="lastname"
                        value={lastname}
                        onChange={(e) => setLastName(lastname => lastname = e.target.value)}
                        />
                    </FormGroup>
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
                        <Input 
                        type="text"
                        name="bio"
                        value={bio}
                        placeholder="Add Bio"
                        onChange={(e) => setBio(bio => bio = e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit" value="submit">SignUp</Button>
                    </FormGroup>
                </Form>
            </div>
        )
}