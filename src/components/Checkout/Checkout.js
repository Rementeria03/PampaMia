import { Container, CssBaseline, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { collection } from 'firebase/firestore/lite';
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router';
import { CartContext } from '../../contexts/CartContext';
import { db } from '../../firebase/config';
import { FormCompra } from '../FormCompra/FormCompra';
import { TableDesc } from './TableDesc/TableDesc';

export const Checkout = () => {

    const {carrito, totalCompra} = useContext(CartContext);
    const ordersRef = collection(db, 'orders');

    const [datos, setDatos] = useState(
        {
            nombre: '',
            apellido: '',
            mail: '',
            telefono: '',
            cp: '',
            localidad: '',
            calle: '',
            altura: ''
        });

    return (
        <>
            {
                carrito.length === 0 
                ? <Navigate to='/' />
                :   <>
                        <CssBaseline />
                        <Container maxWidth='md' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Box sx={{
                            width: '80%',
                            backgroundColor: 'rgb(25, 118, 210)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 3,
                            color: 'beige'
                        }}>
                            <Typography gutterBottom variant='h3'>Resumen de tu compra</Typography>
                            <Typography gutterBottom variant='h4'>Total: {totalCompra()}</Typography>
                        </Box>
                            <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <TableDesc />
                                <FormCompra datos={datos} carrito={carrito} totalCompra={totalCompra} setDatos={setDatos} ordersRef={ordersRef}/>
                            </Container>
                        </Container>
                    </>
            }
        </>
    )
}
