import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/login", { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "success"){
                    navigate('/home')
                }
             else {
                console.log('Login failed:', result.data);
                
            }
                    
            })
    }
    return (
       <div className='flex flex-col w-screen h-screen items-center justify-center '>
         <div className='flex flex-col w-[350px] h-[310px]  pt-8 items-center justify-center bg-orange-400 rounded-md'>
            <h1 className='text-2xl font-semibold text-white'>Login</h1>
            <div className='flex flex-col w-[350px] h-[300px] justify-center items-center p-4 bg-cyan-500 rounded-lg mt-2'>
                <form onSubmit={HandleSubmit} className='flex flex-col  p-4 gap-4 font-sans text-black w-[350px] h-[400px] justify-center'>
                    <div className='flex flex-row justify-between text-white  '>
                        <label className='text-2xl' htmlFor="email">Email Id: </label>
                        <input className='border-2 border-gray-600 text-black pl-1' type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='flex flex-row justify-between text-white '>
                        <label className='text-2xl' htmlFor="password">Password: </label>
                        <input className='border-2 border-gray-600 text-black pl-1' type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex justify-center items-center'>
                    <button className='border-2 border-white bg-green-400 rounded-md justify-center items-center w-16 h-10 p-2 flex ' type='submit'>Login</button>
                    </div>
                </form>
                <div className='w-full flex flex-col items-center justify-center'>
                    <p>Don't have account?</p>
                    <Link to="/register" className='border-2 border-white  rounded-md bg-green-400 p-2 mt-2'>Signup</Link>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Login
