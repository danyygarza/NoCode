import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Inicio from "./pages/inicio";


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/inicio' element={<Inicio />} />
    </Routes>
  )
}