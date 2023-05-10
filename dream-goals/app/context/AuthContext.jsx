'use client';

import React, { createContext, useState, useEffect } from 'react'
import HomePage from '../page';
import LoginPage from './Login' 
import signUp from '../page/signUP';
import Navbar from './Components/NavBar';

const AuthContext = React.createContext()
export default  AuthContext

const AuthProvider = () =>{

    let [authTokens, setAuthTokens] = useState(0)
    let [loading, setLoading] = useState(true)

    const history = useHistory()

    let loginUser = async (userInfo)=> {
        console.log('activated')
        e.preventDefault()
        let dataResponse = await fetch("https://n0y0r4q41a.execute-api.us-east-2.amazonaws.com/Beta/user-info",{mode:"cors",method:"GET",headers:{"content-type":"application/json",'Accept':'application/json'},body:JSON.stringify(userInfo)})
        let data = await dataResponse.body
        setAuthTokens(data)
        /*let response = await axios.post("http://127.0.0.1:8000/api/token/", {
                "username": e.target.username.value,
                "password": e.target.password.value
            })
            .then(data=>{
                setAuthTokens(data.data)
                localStorage.setItem('authTokens', JSON.stringify(data.data))
            })
            .catch(error=>{
                console.log(error)
            })*/
    }

    let logoutUser = () =>{
        setAuthTokens(null)
    }

    let contextData = {
        authTokens:authTokens,
        login:loginUser,
        logout:logoutUser
        
    }
   
    return(
        <>
        <AuthContext.Provider value={contextData}>
            <HomePage/>
            <signUp/>
            <Navbar/>
            <LoginPage/>
        </AuthContext.Provider>
        </>
    )

}

