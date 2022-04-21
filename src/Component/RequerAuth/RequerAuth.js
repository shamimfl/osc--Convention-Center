import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequerAuth = ({children}) => {
    const [user] =useState(auth)
    const lucations =useLocation()

    if(!user){
        return <Navigate to='/singup' state={{from : lucations}} replace />
    }

    return children;
};

export default RequerAuth;