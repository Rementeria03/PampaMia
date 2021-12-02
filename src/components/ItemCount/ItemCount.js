import React from 'react';
import { Button } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { IconButton } from '@material-ui/core';

export const ItemCount = ({cantidad, setCantidad, max, handleAgregar}) => {

    const handleAdd = () => {
        cantidad < max && setCantidad( cantidad + 1)
    }

    const handleRemove = () => {
        cantidad > 0 && setCantidad( cantidad - 1)
    }

    return ( 
        <div>
            <Button onClick={handleRemove}> -
            </Button>
            <span>{cantidad}</span>
            <Button onClick={handleAdd}> +
            </Button>
            <IconButton onClick={handleAgregar}>
                <CheckCircleOutlineRoundedIcon></CheckCircleOutlineRoundedIcon>
            </IconButton>
            
        </div>
    )
}
