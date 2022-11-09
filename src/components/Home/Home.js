import React from 'react'
import './Home.css'
import WelcomeButton from './WelcomeButton'
import {Link} from 'react-router-dom'
import { useAuth } from '../../context/authContext'



function Home() {
    const {user} = useAuth();


    return (
        <>
        <h1>Bienvenido a FRIDA</h1>
        <Link to='/login'><WelcomeButton /></Link>
        </>
    )
}

export default Home;