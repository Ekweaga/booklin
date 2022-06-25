import React from 'react'
import Login from './Login'
import Signup from './Signup'
import {useState} from 'react'

function Auth() {
    const [auth,setauth]=useState(true)

    const authstate = ()=>{
        setauth(false)
    }
  return (
    <div>
           {auth?<Signup login={authstate}/>:<Login />} 
           
    </div>
  )
}

export default Auth