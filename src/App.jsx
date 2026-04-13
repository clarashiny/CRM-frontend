import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import GetUser from './Components/GetUser'
import Protect from './Components/Protect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/getuser' element={  <Protect><GetUser/></Protect>}/>
     
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App

