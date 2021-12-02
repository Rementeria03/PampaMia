import React, { useContext } from 'react'
import { CssBaseline } from '@material-ui/core'
import Container from '@mui/material/Container'
import { CartContext } from '../../contexts/CartContext'
import { ProdOfCart } from '../ProdOfCart/ProdOfCart'
import {Button} from '@mui/material'
import Box from '@mui/material/Box';

export const CartView = () => {

    const { carrito, borrarDelCarrito, vaciarCarrito } = useContext(CartContext)

    return (
        <>
            <h1 style={{marginLeft: '50px'}}>Carrito</h1>
            <CssBaseline />
            <Container style={{display: "flex", flexWrap: "wrap"}} maxWidth="false">
                <ProdOfCart borrarDelCarrito={borrarDelCarrito} carrito={carrito} />
            </ Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    boxSizing: 'border-box'
                }}
            >
                <Button onClick={vaciarCarrito}>
                    Limpiar carrito
                </Button>
            </Box>
        </>
    )
}
