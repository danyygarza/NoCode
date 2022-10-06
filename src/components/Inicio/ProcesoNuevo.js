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
        <Header className='header'>MI ESPACIO</Header>
        <hr />
        <Content>
          <p className='content'>MIS PLANTILLAS</p>
          <p className='vermas'>Ver Más</p>
          <CardNuevoProceso />
        </Content>
        <Content>
          <p className='content'>PLANTILLAS</p>
          <p className='vermas'>Ver Más</p>
          <Plantillas />
        </Content>
        <Content>
          <p className='content'>MARKETPLACE</p>
          <p className='vermas'>Ver Más</p>
          <Marketplace />
        </Content>
      </Layout>
     </Layout>
    
    </>
  )
}
