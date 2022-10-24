import React from 'react'
import { Layout, BackTop } from 'antd'
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
            <BackTop />
            <strong className="site-back-top-basic">  </strong>
          </Content>
        </Layout>
      </Layout>

    </>
  )
}

