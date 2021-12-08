import { CssBaseline } from '@mui/material';
import React, { useState, useEffect } from 'react'
import {ItemList} from '../ItemList/ItemList';
import Container from '@mui/material/Container';
import { useParams } from 'react-router';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config';

export default function ItemListContainer() {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect( () => {
        setLoading(true);
        
        const productosRef = collection(db, 'productos')

        const q = catId ? query( productosRef, where('category', '==', catId) ) : productosRef;

        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProductos(items)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {loading 
                ? 
                    <>
                        <CssBaseline />
                        <Container sx={{display:'flex', justifyContent:'center'}}>
                            <LoadingSpinner />
                        </Container>
                    </>
                : 
                    <>
                        <CssBaseline />
                        <Container style={{display: "flex", flexWrap: "wrap"}} maxWidth="false">
                            <ItemList productos={productos}/>
                        </Container>   
                    </> 
            }
        </>
    )
}
