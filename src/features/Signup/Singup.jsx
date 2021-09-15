import React, {useState} from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {API_ENPOINT} from '../../common/utils/utils'

export const SignUp= () =>{
    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const [firstname ,setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [loader , setLoader] = useState(false)

    const navigate = useNavigate();
    
    async function handleLogin(e){
        e.preventDefault();
        try{
            setLoader(true)
            const response = await axios.post(`${API_ENPOINT}/api/signup`, {
                firstName : firstname,
                lastName : lastname,
                email,
                username,
                password
            })
            console.log(response)
            if(response.status === 200) {
                setLoader(false)
                setPassword("")
                setUsername("")
                setFirstName("")
                setLastName("")
                setEmail("")
                navigate('/login')
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
                        <Button color="primary" type="submit" value="submit">{loader ? <p>Loading..</p>
                         : <p>SignUp</p>}</Button>
                    </FormGroup>
                </Form>
            </div>
        )
}