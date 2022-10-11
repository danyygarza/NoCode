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
                                Theme 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                                Con estos themes del Marketplace, agrega un toque especial a tu automatización
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Theme 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Con estos themes del Marketplace, agrega un toque especial a tu automatización
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Theme 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Con estos themes del Marketplace, agrega un toque especial a tu automatización
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Theme 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Con estos themes del Marketplace, agrega un toque especial a tu automatización
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Theme 5
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Con estos themes del Marketplace, agrega un toque especial a tu automatización
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight: 500, textAlign: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ paddingTop: 30 }}>
                                Theme 6
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ paddingTop: 70, paddingBottom: 50 }}>
                            Con estos themes del Marketplace, agrega un toque especial a tu automatización
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}