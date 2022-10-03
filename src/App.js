import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";



//components
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Signup from "./components/Login/Signup"
import Inicio from "./components/Inicio/Inicio"
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';



export default function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={
         
            <Home />
          
        }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/inicio' element={
          <ProtectedRoute>
        <Inicio />
        </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  )
}