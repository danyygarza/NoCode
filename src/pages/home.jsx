import React from 'react'
import Home from '../components/Home/Home'
import WelcomeButton from '../components/Home/WelcomeButton'
import {Link} from 'react-router-dom'


function home() {
    return (
        <>
            <Home />
            <Link to='/inicio'><WelcomeButton /></Link>
        </>
    )
}

export default home