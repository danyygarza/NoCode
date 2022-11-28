import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Card.css';
import {
    PlusOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';



export default function MediaCard() {
    return (
        <>
            <div className="container">
                <Link to='/example'>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 300, marginBottom: 3, marginTop: 13, marginLeft: 30 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Add and Write in a Column Excel
                            </Typography>
                        </CardContent>
                        <div className='parent'>
                            <div className='div1'>
                                Functions <br />
                                <b>300</b>
                            </div>
                            <span>
                                <div class="vl"></div>
                                <div className='div2'>
                                    Processes<br />
                                    <b>2</b>
                                </div>
                            </span>
                        </div>
                    </Card>
                </div>
                </Link>
                <div className='card-2'>
                    <Card sx={{ maxWidth: 300, marginBottom: 3, marginTop: 13, marginLeft: 5 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Get Cells in Excel
                            </Typography>
                        </CardContent>
                        <div className='parent'>
                            <div className='div1'>
                                Functions <br />
                                <b>300</b>
                            </div>
                            <span>
                                <div class="vl"></div>
                                <div className='div2'>
                                    Processes<br />
                                    <b>2</b>
                                </div>
                            </span>
                        </div>
                    </Card>
                </div>
                <div className='card-3'>
                    <Card sx={{ maxWidth: 300, marginBottom: 3, marginTop: 13, marginLeft: 5 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Get Cells in Excel
                            </Typography>
                        </CardContent>
                        <div className='parent'>
                            <div className='div1'>
                                Functions <br />
                                <b>300</b>
                            </div>
                            <span>
                                <div class="vl"></div>
                                <div className='div2'>
                                    Processes<br />
                                    <b>2</b>
                                </div>
                            </span>
                        </div>
                    </Card>
                </div>
                <div className='card-4'>
                    <Card sx={{ maxWidth: 300, marginBottom: 3, marginTop: 13, marginLeft: 5 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Get Cells in Excel
                            </Typography>
                        </CardContent>
                        <div className='parent'>
                            <div className='div1'>
                                Functions <br />
                                <b>300</b>
                            </div>
                            <span>
                                <div className="vl"></div>
                                <div className='div2'>
                                    Processes<br />
                                    <b>2</b>
                                </div>
                            </span>
                        </div>

                    </Card>
                </div>
                <div className='card-5'>
                    <Link to='/proceso-nuevo'>
                        <Card className='card5' sx={{ maxWidth: 300, marginBottom: 3, marginTop: 13, marginLeft: 5 }}>
                            <CardContent>
                                <div class='button-card'>
                                    <PlusOutlined />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </>
    );
}