import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home, Login, Profile, SignUp , Header} from './features/index'

function App() {
  return (
    <div className="App">
     <Header /> 
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp /> } />
     </Routes>
    </div>
  );
}

export default App;
