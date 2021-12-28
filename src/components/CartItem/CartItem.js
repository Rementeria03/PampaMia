import React, { useContext } from 'react'
import { CardActions } from '@material-ui/core'
import { Button, Card, CardActionArea, CardMedia, Typography, CardContent } from '@mui/material'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { CartContext } from '../../contexts/CartContext';

export const CartItem = ({id , nombre, precio, cantidad, img, tipo}) => {

    const { borrarDelCarrito } = useContext(CartContext)

    return (
        <Card alt={`/productos/${nombre}`} style={{margin: "20px"}} sx={{ maxWidth: 200 }}>
            <CardActionArea style={{flexDirection:'column'}}>
                <CardMedia
                component="img"
                image={img}
                alt={nombre}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h3>{`${nombre} de ${tipo}`}</h3>
                        <span>Precio ${precio}</span>
                    </Typography>
                    <Typography>
                        <span>Total: {cantidad * precio}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button color='secondary' onClick={() => borrarDelCarrito(id)}>
                    <DeleteSweepIcon />
                </Button>
            </CardActions>
        </Card>
    )
}
