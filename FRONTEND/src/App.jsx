import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from "./pages/Login"
import { Route,Navigate,Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
function App() {
  const {auth}=useAuth();
  

  return (

    <>
    <Routes>
      <Route path='/' element={auth ? <Home /> :<Navigate to={"/signup"} />} />
      <Route path="/login" element={auth ? <Navigate to={"/"}/> :<Login />} />
      <Route path="/signup" element={auth ? <Navigate to={"/"}/> :<Signup />} />


    </Routes>
      
    </>
  )
}

export default App
