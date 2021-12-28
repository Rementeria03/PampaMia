import React from 'react';
import { Box } from '@material-ui/core';
import './footer.css'

export const Footer = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '8rem',
            marginTop: '20px',
            backgroundColor: 'rgb(25, 118, 210)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <p className='redes'>Facebook</p>
            <p className='redes'>Tweeter</p>
            <p className='redes'>Instagram</p>
        </Box>
    )
}
