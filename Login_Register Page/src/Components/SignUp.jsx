import React, { useState  } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/register", { name, email, password })
            .then(result => {console.log(result)
                navigate('/login')
            })

            .catch(err => console.log(err))
        
    }

    return (
        <div className='flex flex-col w-screen h-screen items-center justify-center '>
            <div className='flex flex-col w-[350px] h-[310px]  pt-8 items-center justify-center bg-orange-400 rounded-md'>
            <h1 className='text-2xl font-semibold p-4 text-white '>Register</h1>
            <div className='flex flex-col border-2 border-red-500flex  w-[350px] h-[300px] justify-center items-center p-4 bg-cyan-500 rounded-lg '>
                <form onSubmit={HandleSubmit} className='flex flex-col  p-4 gap-4 font-sans text-black w-[350px] h-[400px] justify-center'>
                    <div className='flex flex-row justify-between text-white '>
                        <label className='text-2xl' htmlFor="name">Name: </label>
                        <input className='border-2 border-gray-600 flex text-black pl-1' type="text" name="name" id="name" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='flex flex-row justify-between text-white'>
                        <label  className='text-2xl' htmlFor="email">Email Id: </label>
                        <input className='border-2 border-gray-600 text-black pl-1' type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='flex flex-row justify-between  text-white'>
                        <label className='text-2xl' htmlFor="password">Password: </label>
                        <input className='border-2 border-gray-600 text-black pl-1' type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex justify-center items-center'>
                    <button className='border-2 border-white bg-green-400 rounded-md justify-center items-center w-16 h-10 p-4 flex' type='submit'>Register</button>
                    </div>
                </form>
                <div className='w-full flex flex-col items-center justify-center'>
                    <p>Already have an account</p>
                    <Link to="/login" className='border-2 border-white bg-green-400 p-2 rounded-md'>Login</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp
