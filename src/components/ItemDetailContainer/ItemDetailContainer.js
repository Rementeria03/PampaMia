import React, { useState, useEffect } from 'react'
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import { useParams } from 'react-router'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {LoadingSpinner} from '../LoadingSpinner/LoadingSpinner'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/config';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
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
