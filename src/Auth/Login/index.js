import React from 'react'
import './styles.css'
import {useDispatch} from 'react-redux'
import { authActions } from '../../Redux/store/auth-slice'
import {useState} from 'react'

function Login() {
    const [name, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error,seterror] = useState('')

   
    const dispatch = useDispatch()
    
    const handlesubmit = (e) =>{
        e.preventDefault();
        if(name === "" || email ==="" ){
            seterror("Fields are empty")
        }
        else{
            dispatch(authActions.login())

        }
               
    }

  return (
    <div className='loginform'>
        <h1 style={{color:'green'}}>BOOKLIN</h1><br/>
        <h3>LOGIN</h3>
            <div className='form'>
                <form onSubmit={handlesubmit}>
                    <div>
                        <input type='text' placeholder='UserName' onChange={(e)=>setusername(e.target.value)}/>
                    </div>
                    <div>
                        <input type='email' placeholder='Email' onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div style={{color:'red',display:'flex', alignItems:'center', justifyContent:'center', margin:'10px',textTransform:'capitalize'}}>{error ? error : null}</div>
                    <div>
                       <button>LOGIN</button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Login