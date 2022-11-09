import React from 'react';
import './SubirArchivo.css';
import { Card, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



export default function SubirArchivo() {

    const props = {
        action: '',
        onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
            }
        }
    }

    return (
        <>
            <Card
                title="UploadFile"
                style={{
                    width: 500,
                    marginLeft:500,
                    marginTop:100,
                }}
            >
                <Upload {...props} action={"http://localhost:3000"} accept='.xlsx' beforeUpload={(file) =>{

                    return false
                }}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
                <Link to='/proceso-excel'><Button className='confirm-button'>Confirm</Button></Link>
            </Card>
        </>
    )
}

