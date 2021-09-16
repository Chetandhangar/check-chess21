import React,{useEffect}from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Feed, Login, Profile, SignUp , Header} from './features/index';
import {PrivateRoute} from './features/user/pages/Auth/PrivateRoute';
import {setToken, handleFetchUser,handleFetchUserProfile} from './features/user/userSlice'
import {useDispatch,useSelector} from 'react-redux';
import {setUser} from './common/utils/utils';



function App() {
  const dispatch = useDispatch();
  const {currentUser,token} = useSelector((state) => state.user)
  console.log(currentUser,'from current user')

  useEffect(() => {
    setUser(dispatch,setToken)
  },[dispatch])

  useEffect(() => {
    if(token){
      (async function(){
        await dispatch(handleFetchUser({username : currentUser.username, token}))
        await dispatch(handleFetchUserProfile({username : currentUser.username, token}))
      })();
    }
  },[token,dispatch,currentUser?.username])

 

  return (
    <div className="App">
     <Header /> 
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp /> } />
      <PrivateRoute path="/feed" element={<Feed />}/>
      <PrivateRoute path="/profile/:user" element={<Profile />} />
      
     </Routes>
    </div>
  );
}

export default App;
