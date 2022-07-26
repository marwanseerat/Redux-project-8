import React from 'react'
import {useDispatch} from "react-redux"
import {login} from "../features/userSlice"
import { useState } from 'react';
import "./Login.css"

const Login = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const dispatch = useDispatch();

    const handelSubmit = (e) =>{
      e.preventDefault();

      dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true,
      })
      )
    }

  return (
    <div className='login'>
        <form className='login__form' onSubmit={(e) => handelSubmit(e)}>
        <h1>Login here</h1>
        <input type='name' placeholder='Name' value={name}  onChange={(e) => setName(e.target.value)}/>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit' className='submit__btn'>Submit</button>
        </form>

    </div>
  )
}

export default Login