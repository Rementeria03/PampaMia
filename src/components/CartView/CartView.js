import React, { useContext } from 'react'
import { CssBaseline } from '@material-ui/core'
import Container from '@mui/material/Container'
import { CartContext } from '../../contexts/CartContext'
import { ProdOfCart } from '../ProdOfCart/ProdOfCart'
import {Button, ButtonGroup, Typography} from '@mui/material'
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const CartView = () => {

    const { carrito, borrarDelCarrito, vaciarCarrito } = useContext(CartContext);
    const navigate = useNavigate()

    const handleVaciar = () => {
        Swal.fire({
            icon: 'success',
            title: 'Se vacio su carrito'
        })
        vaciarCarrito();
        navigate('/');
    }

    return (
        <>
            {carrito.length > 0 
                ? 
                    <>
                        <Typography align='center' variant='h3'>Carrito</Typography>
                        <CssBaseline />
                        <Container style={{display: "flex", flexWrap: "wrap"}} maxWidth="false">
                            <ProdOfCart borrarDelCarrito={borrarDelCarrito} carrito={carrito} />
                        </Container>
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
                            <ButtonGroup variant='contained'>
                                <Button 
                                    onClick={handleVaciar}
                                    disabled={carrito.length === 0}
                                    color='secondary'
                                >
                                    Limpiar carrito
                                </Button>
                                <Button color='primary'>
                                    <Link to='/checkout' style={{textDecoration:'none'}}>Terminar mi compra</Link>  
                                </Button>    
                            </ButtonGroup>
                        </Box>
                    </>
                : 
                    <h2 style={{marginLeft: '50px'}}>No hay items en el carrito</h2>
            }
        </>
    )
}
