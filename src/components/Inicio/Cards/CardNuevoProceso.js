import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardNuevoProceso.css';
import { useNavigate } from 'react-router-dom';
import { useModalForm } from 'sunflower-antd';
import { Modal, Input, Button, Form, Spin, Tooltip } from 'antd';
import { useState } from 'react';


const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
    const { value, onChange } = props;
    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
            onChange(inputValue);
        }
    };

    // '.' at the end or only '-' in the input box.
    const handleBlur = () => {
        // let valueTemp = value;
        // if (value.charAt(value.length - 1) === '.' || value === '-') {
        //     valueTemp = value.slice(0, -1);
        // }
        // onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };
    const title = value ? (
        <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
    ) : (
        'Input a number'
    );
    return (
        <Input
            {...props}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{maxWidth: 'auto'}}
            placeholder="Input a number"
            maxLength={16}
        />
    );
};


export default function CardNuevoProceso() {
    const [form] = Form.useForm();
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const {
        modalProps,
        formProps,
        show,
        formLoading,
        formValues,
        formResult,
    } = useModalForm({
        defaultVisible: false,
        autoSubmitClose: true,
        autoResetForm: true,
        submit(data) {
            console.log('beforeSubmit');
            console.log('afterSubmit', data.id);
            navigate("/crear-proceso", {state:{id: data.id}});

        },
        form,
    });


    return (
        <>
            <div className="container">
                <div className='card-1' onClick={show}>

                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 30, maxHeight: 273, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Create my own process
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 70 }}>
                                Create your own automation process
                            </Typography>
                        </CardContent>
                        <Modal {...modalProps} title="Create Process" okText="submit" width={600}>
                            <Spin spinning={formLoading}>
                                <>
                                    <p>result: {formResult}</p>
                                    <Form layout="inline" {...formProps}>
                                        <Form.Item
                                            label="Process ID"
                                            name="id"
                                            rules={[{ required: true, message: 'Please input your process ID' }]}
                                        >
                                            <NumericInput
                                                style={{
                                                    width: 120,
                                                }}
                                                value={value}
                                                onChange={setValue}
                                            />
                                        </Form.Item >
                                    </Form>
                                </>
                            </Spin>
                        </Modal>
                    </Card>
                    {/* </Link> */}
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Monthly Settlements
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                                Automatically send emails to people with pending payments
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Monthly Settlements
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                                Automatically send emails to people with pending payments
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Monthly Settlements
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Automatically send emails to people with pending payments
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Monthly Settlements
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Automatically send emails to people with pending payments
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Monthly Settlements
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Automatically send emails to people with pending payments
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}