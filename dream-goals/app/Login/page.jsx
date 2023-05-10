'use client';

import React, {useContext, useState} from 'react';
import AuthContext from '../context/AuthContext'
import Link from 'next/link'
import Navbar from './Components/NavBar';


const LoginPage = () =>{
    let {tokens, longinUser,logout}= useContext(AuthContext)
    const [goodSubmit,setGoodSubmit] = useState(0)
    const [userInfo,setUserInfo] = useState({first_name:"",last_name:"",email:"",username:"",password:""})

    const handleClick = (e) => {
        const { name, value} = e.target
        setUserInfo({...userInfo, [name]:value})
    }
    
    const handleSubmit = async (e) => {
        let response = await fetch("https://n0y0r4q41a.execute-api.us-east-2.amazonaws.com/Beta/user-info",{mode:"cors",method:'GET',headers:{'content-type':'application/json','Accept':'application/json'},body:JSON.stringify(userInfo)})

    }
    console.log("made it to logIn")
    switch(goodSubmit){
        case 0:
            console.log("made it to case 1")
            return(
                <div>
                    <Navbar></Navbar>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="Enter Username" onChange={handleClick}/>
                        <br />
                        <input type="password" name="password" placeholder="Enter Password"  onChange={handleClick}/>
                        <br />
                        <input type="submit"/>
                    </form>
                    <Link href="/signUP">Sign up</Link>
                </div>
            )
            break;
        case 1:
            return(
                <div>
                    <Navbar></Navbar>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-red-500'>Incorrect Username or Password</h1>
                        <input type="text" name="username" placeholder="Enter Username" />
                        <br />
                        <input type="password" name="password" placeholder="Enter Password"  />
                        <br />
                        <input type="submit"/>
                    </form>
                    <Link href="/signUP">Sign up</Link>
                </div>
            )
        case 2:
            return(
                <div>
                    <Navbar></Navbar>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="Enter Username" />
                        <br />
                        <input type="password" name="password" placeholder="Enter Password"  />
                        <br />
                        <input type="submit"/>
                    </form>
                    <Link href="/signUP">Sign up</Link>
                </div>
            )
        break;
    }

}
export default LoginPage;