import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const navigate=useNavigate();
     const [login,setLogin]= useState({
            email:"",
            password:""
        })
        const handleChange=(e)=>{
            setLogin({...login,[e.target.name]:e.target.value})
        }
        const handleSubmit=async(e)=>{
            e.preventDefault();
            try{
                const res=await axios.post("http://localhost:3002/users/login",login);
                localStorage.setItem("token",res.data.token)
                console.log(res.data.token);
                
                navigate('/getuser')
            }catch(err){
                console.error(err);
            }
        }                                                                                                
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
     
     <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
         
         <Link 
            to='/' 
            className="inline-block mb-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
         >
            Home
         </Link>

        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
            Login
        </h2>

        <form method="POST" onSubmit={handleSubmit} className="space-y-4">
                          
            <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input 
                    type='email' 
                    placeholder='Enter ur email' 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    name='email' 
                    value={login.email} 
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input 
                    type='password' 
                    placeholder='Enter ur password' 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    name='password' 
                    value={login.password} 
                    onChange={handleChange}
                />
            </div>

            <button 
                type='submit' 
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
                Login
            </button>

            <Link 
                to='/register' 
                className="block text-center text-sm text-gray-600 hover:text-blue-500"
            >
                Create a new user
            </Link>

        </form>
        
        </div>
     </div>
  )
}

export default Login