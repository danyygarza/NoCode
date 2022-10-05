import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";



//components
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Inicio from "./components/Inicio/Inicio";
import Navbar from './components/Shared/Navbar'
import ResetPassword from './components/Login/ResetPassword';
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
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/inicio' element={
          <ProtectedRoute>
        <Inicio />
        </ProtectedRoute>
        } />
        <Route path='/navbar' element={
          <ProtectedRoute>
        <Navbar />
        </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  )
}