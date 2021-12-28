import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { IconButton } from '@mui/material';

export const TableDesc = () => {

    const {carrito, borrarDelCarrito} = useContext(CartContext)

    return (
        <TableContainer>
            <Table sx={{ p:3, width: 'auto', maxWidth: 300 ,borderRadius:'10px'}}>
                <TableHead>
                    <TableCell>Producto</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell></TableCell>
                </TableHead>
                <TableBody>
                    {
                        carrito.map(prod => {
                            return(
                                <TableRow key={prod.id}>
                                    <TableCell>{prod.nombre}</TableCell>
                                    <TableCell>{prod.tipo}</TableCell>
                                    <TableCell>{prod.cantidad}</TableCell>
                                    <TableCell>{prod.precio}</TableCell>
                                    <TableCell>
                                        <IconButton color='secondary' onClick={() => borrarDelCarrito(prod.id)}>
                                            <DeleteSweepIcon />
                                        </ IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}