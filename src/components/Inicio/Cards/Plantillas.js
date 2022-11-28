import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardNuevoProceso.css';



export default function CardNuevoProceso() {
    return (
        <>
            <div className="container">
            <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 30, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Template 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Use this template to generate an automation process quicker
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Template 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Use this template to generate an automation process quicker
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Template 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Use this template to generate an automation process quicker
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Template 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Use this template to generate an automation process quicker
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Template 5
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Use this template to generate an automation process quicker
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Template 6
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Use this template to generate an automation process quicker
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}