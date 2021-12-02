import { CssBaseline } from '@mui/material';
import React, { useState, useEffect } from 'react'
import {pedirDatos} from '../../helpers/pedirDatos'
import {ItemList} from '../ItemList/ItemList';
import Container from '@mui/material/Container';
import { useParams } from 'react-router';

export default function ItemListContainer() {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    const { catId } = useParams()

    useEffect( () => {
        setLoading(true);
        pedirDatos()
            .then( (resp) =>{
                if(!catId){
                    setProductos(resp)
                } else{
                    setProductos(resp.filter((prod) => prod.category === catId))
                }
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [catId])

    return (
        <>
            <CssBaseline />
            <Container style={{display: "flex", flexWrap: "wrap"}} maxWidth="false">
                {loading 
                    ? <h1>Cargando...</h1> 
                    : <ItemList productos={productos}/>
                }
            </Container>
        </>
    )
}
