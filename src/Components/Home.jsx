import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-full max-w-md">

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Welcome 
        </h1>

        <p className="text-gray-600 mb-6">
          Customer Relationship Management Application
        </p>

        {/* 🔐 If NOT logged in */}
        {!isLoggedIn && (
          <div className="space-y-3">
            <Link
              to="/login"
              className="block w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="block w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Register
            </Link>
          </div>
        )}

        {/* ✅ If logged in */}
        {isLoggedIn && (
          <div className="space-y-3">
            <button
              onClick={() => navigate('/getuser')}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              View My Data
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Home