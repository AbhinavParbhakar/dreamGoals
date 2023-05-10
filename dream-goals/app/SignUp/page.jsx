'use client';

import { useContext, useState } from "react";
import Navbar from "./Components/navbar";
import AuthContext from "../context/AuthContext";



const signUp = () => {
    let {userTokens, logIn, logOut} = useContext(AuthContext)
    const [userInfo,setUserInfo] = useState({first_name:"",last_name:"",email:"",username:"",password:""})


    const handleClick = (e) => {
        const { name, value} = e.target
        setUserInfo({...userInfo, [name]:value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        //let optionResponse = await fetch("https://n0y0r4q41a.execute-api.us-east-2.amazonaws.com/Alpha/user-info/",{method:"OPTIONS",headers:{'content-type':'application/json','Accept':'application/json',body:JSON.stringify(userInfo)}})
        let response = await fetch("https://n0y0r4q41a.execute-api.us-east-2.amazonaws.com/Beta/user-info",{mode:"cors",method:'POST',headers:{'content-type':'application/json','Accept':'application/json'},body:JSON.stringify(userInfo),redirect:"follow"})
        let data = await response.status
        console.log(data)
    }

    return(
    <>
    <Navbar></Navbar>
    <div className="bg-yellow-300 my-[10%]">
        <form className="bg-blue-300 mx-[35%] max-w-[50%]" onSubmit={handleSubmit}>
            <h2 className="mx-[30%] max-w-md">Sign Up</h2>
            <br/>
            <input className="mx-[15%] max-w-[50%] text-center text-[70%]" type="text" name="first_name" 
           onChange={handleClick} placeholder="First Name"/>
            <br/>
            <input className="mx-[15%] max-w-[50%] text-center text-[70%]" type="text" name="last_name" 
            onChange={handleClick} placeholder="Last Name"/>
            <br/>
            <input className="mx-[15%] max-w-[50%] text-center text-[70%]" type="text" name="email" onChange={handleClick}placeholder="Email Address"/>
            <br/>
            <input className="mx-[15%] max-w-[50%] text-center text-[70%]" type="text" name="username" onChange={handleClick}placeholder="Username"/>
            <br/>
            <input className="mx-[15%] max-w-[50%] text-center text-[70%]" type="password" name="password" onChange={handleClick}placeholder="password"/>
            <br/>
            <input type="submit" className="bg-red-500 hover:bg-zinc-500 mx-[30%]"/>
            </form>
    </div>
    </>
    )
}

export default signUp;