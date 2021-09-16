import React,{useEffect}from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Feed, Login, Profile, SignUp , Header} from './features/index';
import {PrivateRoute} from './features/user/Auth/PrivateRoute';
import {setToken} from './features/user/userSlice'
import {useDispatch} from 'react-redux';
import {setUser} from './common/utils/utils';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(dispatch,setToken)
  })

  return (
    <div className="App">
     <Header /> 
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp /> } />
      <PrivateRoute path="/feed" element={<Feed />}/>
      <PrivateRoute path="/profile" element={<Profile />} />
      
     </Routes>
    </div>
  );
}

export default App;
