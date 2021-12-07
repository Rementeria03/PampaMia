import React, { useContext, useState } from 'react';
import { Button, Card, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

export const ItemDetail = ({id, img, nombre, precio, tipo, material, stock}) => {

    const { agregarAlCarrito, estaEnCarrito} = useContext(CartContext)
    
    const [cantidad, setCantidad] = useState(0)

    const navigate = useNavigate()

    const handleAgregar  = () => {
        if(cantidad > 0){
            agregarAlCarrito({
                id,
                nombre,
                cantidad,
                precio,
                img,
                tipo
            })
        }
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return(
            <Card>
                <CardMedia
                    component="img"
                    height="200"
                    image= {img}
                    alt={nombre}
                />
                <CardContent aling='center'>
                    <Typography sx={{fontSize: '20px'}} align='center'>
                        {nombre} de {tipo}   
                    </Typography>
                    <Typography align='center'>
                        {`Echo de ${material}, lijada y pintada a mano`}
                    </Typography>
                    <Typography align='center'>
                        {`Precio: $${precio}`}
                    </Typography>
                </ CardContent>
                <CardActions style={{flexDirection:'column' ,justifyContent: 'space-around'}}>
                    {!estaEnCarrito(id)
                        ?   <ItemCount
                        handleAgregar={handleAgregar}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        max={stock}
                        />
                        :   <Button>
                                <Link to='/cart'>Al carrito</Link>
                            </ Button>
                    }
                    <IconButton onClick={handleVolver}>
                        <ArrowBackIcon></ArrowBackIcon>
                    </IconButton>
                </CardActions>
            </Card>
    )
}