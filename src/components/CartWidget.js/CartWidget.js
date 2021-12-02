import React from 'react'
import { IconButton } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


export default function CartWidget() {
    
    return (
        <Link to='/cart'>
        <IconButton aria-label="add to shopping cart">
            <ShoppingCartOutlinedIcon />
        </IconButton>
        </Link>
    )
}
