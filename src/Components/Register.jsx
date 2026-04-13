import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [profilename, setProfilename] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setProfilename({ ...profilename, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const reg = {
            name: profilename.name,
            email: profilename.email,
            password: profilename.password
        }
        axios.post("http://localhost:3002/users/register", reg)
            .then(result => console.log(result.data))
            .catch(err => console.error(err))
        alert("Registered successfully")
        setProfilename({ name: "", email: "", password: "" })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <Link
                    to='/'
                    className="inline-block mb-4 text-yellow-500 hover:text-yellow-600 font-medium"
                >
                    Home
                </Link>

                <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">Register</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-gray-700 mb-1">Name</label>
                        <input
                            type='text'
                            placeholder='Enter your name'
                            name='name'
                            value={profilename.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            name='email'
                            value={profilename.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            name='password'
                            value={profilename.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        Register
                    </button>

                    <Link
                        to='/login'
                        className="block text-center mt-2 text-sm text-gray-600 hover:text-blue-500"
                    >
                        Sign in
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Register