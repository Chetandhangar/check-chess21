import React from 'react';
import {useSelector} from 'react-redux';
import { Navigate, Route, useLocation } from 'react-router-dom';



export const PrivateRoute = ({path , ...props}) => {
    const {token} = useSelector((state) => state.user);
    const location = useLocation();
    if(token) {
       return <Route {...props} path={path} />
    }else{
       return <Navigate  state={{ from: location.pathname }} replace to='/login' />
    }
}