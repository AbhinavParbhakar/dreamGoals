'use client';

import Navbar from "./Components/NavBar";
import AuthContext from "./context/AuthContext";
import { useContext } from "react"

const HomePage = ()=> {
  let {authTokens, logoutUser, loginUser} = useContext(AuthContext)

  /*let getUserinfo = async() =>{
    let response= await fetch('http://127.0.0.1:8000/api/users/user-info/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ String(authTokens.access)
      }
    })
    let data= await response.json()

    if(response.status === 200){
      setUserinfo(data)
    }else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }

  }*/
 if (authTokens == 0){
    return (
      <div>
        <Navbar ></Navbar>
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <h1 className='text-3xl text-red-600'>Welcome to My Goals</h1>
          <h2>Not Logged In</h2>
        </div>
      </div>
    )
  }else{
    return (
      <div>
        <Navbar></Navbar>
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <h1 className='text-3xl text-red-600'>Welcome to My Goals</h1>
          <h2> Welcome {authTokens["authTokens"]["first_name"]}!</h2>
        </div>
      </div>
    )
  }

}
export default HomePage;