import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext= createContext() ;

export const AuthProvider=({children})=>{
    const [Auth, setAuth] = useState(false);
    const navigate= useNavigate()
    const login =()=>{
        setAuth(true);
        navigate("/")
    }
    const logout=()=>{
        setAuth(false)
        navigate("/login")
    }
    return <AuthContext.Provider
    value={{Auth,login,logout}}
    >{children}</AuthContext.Provider>
}
