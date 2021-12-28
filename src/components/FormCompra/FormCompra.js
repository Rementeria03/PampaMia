import { Box } from '@material-ui/core';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import { addDoc, Timestamp } from 'firebase/firestore/lite';
import React from 'react';
import { useNavigate } from 'react-router';
import './formCompra.css';
import Swal from 'sweetalert2';

export const FormCompra = ({datos, ordersRef, setDatos, carrito, totalCompra}) => {

    const navigate = useNavigate()

    const handleEnviar = () => {

        const ordener = {
            buyer: {...datos},
            items: carrito,
            total: totalCompra(),
            fecha: Timestamp.fromDate(new Date())
        }

        addDoc(ordersRef, ordener)
            .then((resp) => {
                console.log(resp.id)
            })
            .finally(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Compra registrada con exito',
                    text: 'Gracias por su compra'
                });
                navigate('/');
            })
    }

    const handleAct = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value)
    }

    return (
        <Box sx={{
            component:'form',
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection:'column',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: 4,
            p: 3,
            marginY: 4
        }}>
            <div className='fstD'>
                <TextField onChange={handleAct} sx={{marginX: 1, marginY : 1}} name='nombre' label='Nombre'></TextField>
                <TextField onChange={handleAct} sx={{marginX: 1, marginY : 1}} name='apellido' label='Apellido'></TextField>
                <TextField onChange={handleAct} sx={{marginX: 1, marginY : 1}} name='telefono' type='number' label='Telefono'></TextField>
                <TextField onChange={handleAct} name='mail' sx={{marginX: 1, marginY: 1}} fullWidth label='Mail'></TextField>
                <TextField onChange={handleAct} name='calle' sx={{marginX: 1, marginY: 1}} fullWidth label='Calle'></TextField>
                <TextField onChange={handleAct} name='altura' sx={{marginX: 1, marginY: 1}} type='number' label='altura'></TextField>
                <TextField onChange={handleAct} name='localidad' sx={{marginX: 1, marginY: 1}} label='localidad'></TextField>
                <TextField onChange={handleAct} name='cp' sx={{marginX: 1, marginY: 1}} type='number' label='CP'></TextField>
            </div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 2
            }}>
                <Button onClick={handleEnviar} sx={{}} variant='outlined'>Comprar</Button>
            </Box>
        </Box>

    )
}
