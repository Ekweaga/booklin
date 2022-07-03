import React from 'react'
import {useState} from 'react'

function Signup({login}) {
    const [name, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error,seterror] = useState('')

    const handlesubmit = (e)=>{
        e.preventDefault();
        if(name === "" || email ==="" || password ===""){
            seterror("Fields are empty")
        }
        else{
                    login();
        }
    }
  return (
    <div className='loginform'>
        <h1 style={{color:'green'}}>BOOKLIN</h1><br/>
        <h3>Sign Up</h3>
            <div className='form'>
                <form onSubmit={handlesubmit}>
                    <div>
                        <input type='text' placeholder='UserName' onChange={(e)=>setusername(e.target.value)}/>
                    </div>
                    <div>
                        <input type='email' placeholder='Email' onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div>
                        <input type='password' placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <div style={{color:'red',display:'flex', alignItems:'center', justifyContent:'center', margin:'10px',textTransform:'capitalize'}}>{error ? error : null}</div>
                    <div>
                       <button >SIGN UP</button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup