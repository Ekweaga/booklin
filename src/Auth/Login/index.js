import React from 'react'
import './styles.css'
import {useDispatch} from 'react-redux'
import { authActions } from '../../Redux/store/auth-slice'

function Login() {
    const dispatch = useDispatch()
    
    const handlesubmit = (e) =>{
                e.preventDefault();
                dispatch(authActions.login())

    }

  return (
    <div className='loginform'>
        <h1 style={{color:'green'}}>BOOKLIN</h1><br/>
        <h3>LOGIN</h3>
            <div className='form'>
                <form onSubmit={handlesubmit}>
                    <div>
                        <input type='text' placeholder='UserName'/>
                    </div>
                    <div>
                        <input type='text' placeholder='UserName'/>
                    </div>
                    <div>
                       <button>LOGIN</button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Login