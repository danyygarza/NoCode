import React, { useState } from 'react';
import { Layout, BackTop } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import '../../ProcesoNuevo/CrearProceso.css'
import SaveOutlined from '@ant-design/icons'

//components
import Navbar from '../../Shared/Navbar';
import Code from '../../../Pages/SandBox/code';


function Example() {

  const [storage, setStorage] = useState(true);

  return (
    <>
      <Layout>
        <Navbar />
        <Layout>
          {storage && (
            <>
              <SaveOutlined className='saveOutlined'/>
              {console.log('saveoutlined')}
              <Content className='crear-proceso-content'>
                <Code />
                <BackTop />
                <strong className="site-back-top-basic">  </strong>
              </Content>
            </>
          )}
        </Layout>
      </Layout>

    </>
  )
}

export default Example