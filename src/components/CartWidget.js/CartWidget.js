import React, { useContext } from 'react'
import { IconButton } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';


export default function CartWidget() {

    const { cantidadCarrito } = useContext(CartContext)
    
    return (
        <Link to='/cart'>
        <IconButton aria-label="add to shopping cart">
            <ShoppingCartOutlinedIcon />
        </IconButton>
        <span>{cantidadCarrito()}</span>
        </Link>
    )
}
