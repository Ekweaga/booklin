import React from 'react'
import {Link} from 'react-router-dom';
import './styles.css'
import {useDispatch} from 'react-redux'
import { authActions } from '../../Redux/store/auth-slice'
import {useState} from 'react'
import { BoxFormContainer , FormContainer,Input,Button,BoldLink,MutedLink} from '../../common'


function Login({expand}) {
    const [name, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error,seterror] = useState(null)

   
    const dispatch = useDispatch()
    
    const handlesubmit = (e) =>{
        e.preventDefault();
        if(password === "" || email ==="" ){
            seterror("Fields are empty")
        }
        else{
            dispatch(authActions.login());
            seterror(null)

        }

       
               
    }

  return (
   <BoxFormContainer>
    <FormContainer onSubmit={handlesubmit}>
   
        <Input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
        <span style={{width:'100%',fontSize:'14px'}} >Don't have an account ? <span onClick={expand} style={{color:'green'}}>Sign up</span></span><br/>
        <Button type="submit" >Sign in</Button>
        <div style={{width:'100%', textAlign:'center',color:'crimson',padding:'5px'}}>{error}</div>
    </FormContainer>
   </BoxFormContainer>
  )
}

export default Login