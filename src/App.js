import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";



//components
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Inicio from "./components/Inicio/Inicio";
import ResetPassword from './components/Login/ResetPassword';

import Navbar from './components/Shared/Navbar';
import VideoTutoriales from "./components/Inicio/VideoTutoriales";
import ProcesoNuevo from "./components/Inicio/ProcesoNuevo";
import CrearProceso from "./components/ProcesoNuevo/CrearProceso";
import Forms from "./components/Forms/Forms";
import ProcesoExcel from "./components/ProcesoNuevo/ProcesoExcel";
import SubirArchivo from './components/CartasProcesos/SubirArchivo';
//import MostUsedFunctions from './components/Forms/MostUsedFunctions';
import AllFunctions from "./components/Forms/AllFunctions";
import { AuthProvider } from './context/authContext';
import Code from './Pages/SandBox/code';

//prueba de api



/* 
<Route path='/card' element={
  <ProtectedRoute>
    <Card />
  </ProtectedRoute>
} /> 
*/

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

          <Inicio />

        } />

        <Route path='/navbar' element={

          <Navbar />

        } />

        <Route path='/code' element={<Code />} />


        <Route path='/video-tutoriales' element={

          <VideoTutoriales />

        } />

        <Route path='/proceso-nuevo' element={

          <ProcesoNuevo />

        } />

        <Route path='/crear-proceso' element={

          <CrearProceso />

        } />

        <Route path='/forms' element={

          <Forms />

        } />

        <Route path='/all-functions' element={

          <AllFunctions />

        } />

        <Route path='/proceso-excel' element={

          <ProcesoExcel />

        } />

        <Route path='/subir-archivo' element={

          <SubirArchivo />

        } />

      </Routes>
    </AuthProvider>
  )
}