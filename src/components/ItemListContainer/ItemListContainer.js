import { CssBaseline } from '@mui/material';
import React, { useState, useEffect } from 'react'
import {pedirDatos} from '../../helpers/pedirDatos'
import {ItemList} from '../ItemList/ItemList';
import Container from '@mui/material/Container';
import { useParams } from 'react-router';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

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
