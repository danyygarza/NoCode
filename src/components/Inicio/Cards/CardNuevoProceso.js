import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardNuevoProceso.css';
import { Link } from 'react-router-dom';



export default function CardNuevoProceso() {
    return (
        <>
            <div className="container">
                <div className='card-1'>
                    <Link to='/crear-proceso'>
                    <Card sx={{  maxWidth: 250, marginBottom: 3, marginLeft: 30, maxHeight:500, textAlign:'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingTop:30}}>
                                Crear mi propio proceso
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingTop:70, paddingBottom: 70}}>
                                Crea tu propio proceso de automatización
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </div>
                <div className='card-1'>
                    <Card sx={{  maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight:500, textAlign:'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingTop:30}}>
                                Liquidaciones Mensuales
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingTop:70, paddingBottom: 50}}>
                                Manda correos automáticamente a las personas con pagos pendientes
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{  maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight:500, textAlign:'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingTop:30}}>
                                Liquidaciones Mensuales
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingTop:70, paddingBottom: 50}}>
                                Manda correos automáticamente a las personas con pagos pendientes
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{  maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight:500, textAlign:'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingTop:30}}>
                                Liquidaciones Mensuales
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingTop:70, paddingBottom: 50}}>
                                Manda correos automáticamente a las personas con pagos pendientes
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{  maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight:500, textAlign:'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingTop:30}}>
                                Liquidaciones Mensuales
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingTop:70, paddingBottom: 50}}>
                                Manda correos automáticamente a las personas con pagos pendientes
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card-1'>
                    <Card sx={{  maxWidth: 250, marginBottom: 3, marginLeft: 3, maxHeight:500, textAlign:'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingTop:30}}>
                                Liquidaciones Mensuales
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingTop:70, paddingBottom: 50}}>
                                Manda correos automáticamente a las personas con pagos pendientes
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}