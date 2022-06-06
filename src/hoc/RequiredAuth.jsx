import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

export const RequireAuth = ({children}) => {
    const {Auth}= useContext(AuthContext) ;
    if(Auth){
        return children ;  
    }
    else{
        return <Navigate to="/login"/>
    }
}
