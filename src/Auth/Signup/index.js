import React from 'react'

function Signup({login}) {
  return (
    <div className='loginform'>
        <h1 style={{color:'green'}}>BOOKLIN</h1><br/>
        <h3>Sign Up</h3>
            <div className='form'>
                <form>
                    <div>
                        <input type='text' placeholder='UserName'/>
                    </div>
                    <div>
                        <input type='email' placeholder='Email'/>
                    </div>
                    <div>
                        <input type='password' placeholder='Password'/>
                    </div>
                    <div>
                       <button onClick={login}>SIGN UP</button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup