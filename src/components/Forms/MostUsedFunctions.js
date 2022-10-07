import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import './MostUsedFunctions.css'

//components



export default function MostUsedFunctions() {
    
    return (
        <>
            <span style={{ float: 'left' }}>
                <Link to='/proceso-excel'>
                    <Button style={{ height: 120, borderRadius: 40, width: 124, borderColor: 'white' }}>
                        <div className="imgp">
                            <img src="favicon.ico" alt="logo" style={{ width: 70 }} />
                            <p style={{ color: 'black', marginLeft: 0 }}><b>UploadFile</b></p>
                        </div>
                    </Button>
                </Link>
            </span>
            <span style={{ float: 'left' }}>
                <Button style={{ height: 120, borderRadius: 40, width: 124, borderColor: 'white' }} >
                    <div className="imgp">
                        <img src="favicon.ico" alt="logo" style={{ width: 70 }} />
                        <p style={{ color: 'black', marginLeft: 0 }}><b>ExcelWrite</b></p>
                    </div>
                </Button>
            </span>
        </>
    )
}

