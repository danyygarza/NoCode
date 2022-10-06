import React from 'react'
import { Link } from 'react-router-dom'
import './MostUsedFunctions.css'

export default function MostUsedFunctions() {
    return (
        <>
            
                <span style={{ float:'left'}}>
                    <Link to='/proceso-excel'>
                    <div className="imgp">
                        <img src="favicon.ico" alt="logo" style={{ width: 70}} />
                        <p style={{ color: 'black', marginRight:26  }}><b>InsertRow</b></p>
                    </div>
                    </Link>
                </span>
            
        </>
    )
}

