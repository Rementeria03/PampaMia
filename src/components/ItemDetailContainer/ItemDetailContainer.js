import React, { useState, useEffect } from 'react'
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((resp) =>{
                setItem(resp.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                {loading
                    ?   
                        <>
                            <CssBaseline />
                            <Container sx={{display:'flex', justifyContent:'center'}}>
                                <LoadingSpinner />
                            </Container>
                        </>
                    :   <ItemDetail {...item}/>
                }
            </Container>
        </>
    )
}
