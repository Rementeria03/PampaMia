import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export const Item = ({prod}) => {

    return(
        <Card alt={`/productos/${prod.id}`} style={{margin: "20px"}} sx={{ maxWidth: 200 }}>
            <CardActionArea style={{flexDirection:'column'}}>
                <CardMedia
                component="img"
                image={prod.img}
                alt={prod.nombre}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h3>{prod.nombre} de {prod.tipo}</h3>
                        <p>Precio ${prod.precio}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button color='primary' size='small' variant='outlined'>
                        <Link style={{textDecoration: 'none'}} to={`/detail/${prod.id}`}>Agregar</Link>
                    </Button>
            </CardActions>
        </Card>
    )
}



