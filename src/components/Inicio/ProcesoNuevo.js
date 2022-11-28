import React from 'react';
import { Layout } from 'antd';
import './ProcesoNuevo.css';
import 'antd/dist/antd.css';


//components
import Navbar from '../Shared/Navbar';
import CardNuevoProceso from './Cards/CardNuevoProceso';
import Plantillas from './Cards/Plantillas';
import Marketplace from './Cards/Marketplace';

export default function ProcesoNuevo() {
 
  const { Header, Content } = Layout;

  return (
    <>
     <Layout>
      <Navbar />
      <Layout>
        <Header className='header'>MY SPACE</Header>
        <hr />
        <Content>
          <p className='content'>MY TEMPLATES</p>
          <p className='vermas'>View More</p>
          <CardNuevoProceso />
        </Content>
        <Content>
          <p className='content'>TEMPLATES</p>
          <p className='vermas'>View More</p>
          <Plantillas />
        </Content>
        <Content>
          <p className='content'>MARKETPLACE</p>
          <p className='vermas'>View More</p>
          <Marketplace />
        </Content>
      </Layout>
     </Layout>
    
    </>
  )
}
