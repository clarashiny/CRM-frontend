import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GetUser = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    // 🔐 Protect route
    if (!token) {
      navigate('/login')
      return
    }

    getUserDetails(token)
  }, [])

  const getUserDetails = async (token) => {
    try {
      const res = await axios.get(
        "http://localhost:3002/users/getuser",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log(res.data.result)
      setData(res.data.result)

    } catch (err) {
      console.error(err)

      if (err.response && err.response.status === 401) {
        // token invalid
        localStorage.removeItem("token")
        navigate('/login')
      } else {
        setError("Failed to fetch data ❌")
      }

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">

        <h1 className="text-2xl font-bold text-green-600 mb-4">
          My Data
        </h1>

        {/* ⏳ Loading */}
        {loading && (
          <p className="text-gray-500">Loading...</p>
        )}

        {/* ❌ Error */}
        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {/* ✅ Data */}
        {!loading && data.length === 0 && (
          <p className="text-gray-500">No users found</p>
        )}

        <ul className="space-y-3">
          {data.map((item) => (
            <li
              key={item._id}
              className="p-3 border rounded-lg shadow-sm"
            >
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.email}</p>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("token")
            navigate('/login')
          }}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>

      </div>
    </div>
  )
}

export default GetUser