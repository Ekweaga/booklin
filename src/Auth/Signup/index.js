import React from 'react'
import {useState} from 'react'
import { BoxFormContainer , FormContainer,Input,Button,BoldLink,MutedLink} from '../../common'
import {Link} from 'react-router-dom'

function Signup({expand}) {
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

            seterror("Account created")
            setTimeout(()=>{
                expand();
            },1000)
          
        }
       
    }
  return (
    <BoxFormContainer>
    <FormContainer onSubmit={handlesubmit}>
        <Input type="text" placeholder="Name" value={name} onChange={(e)=>setusername(e.target.value)}/><br/>
        <Input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
        <span style={{width:'100%',fontSize:'14px'}}>Already have an account ? <span style={{color:'green'}} onClick={expand}>Sign in</span></span><br/>
        <Button type="submit">Sign Up</Button>
        <div style={{width:'100%', textAlign:'center',color:'crimson',padding:'5px'}}>{error}</div>
    </FormContainer>
   </BoxFormContainer>
  )
}

export default Signup