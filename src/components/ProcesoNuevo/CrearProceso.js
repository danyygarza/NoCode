import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import './CrearProceso.css'

//components
import Navbar from '../Shared/Navbar'
import Code from '../../Pages/SandBox/code'



export default function CrearProceso() {
  return (
    <>
     <Layout>
      <Navbar />
      <Layout>
        <Content className='crear-proceso-content'>
          <Code />
        </Content>
      </Layout>
     </Layout>
    
    </>
  )
}

