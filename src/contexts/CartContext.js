import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {


    const [carrito, setCarrito] = useState([]);

    console.log(carrito)

    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item])
    };
    const borrarDelCarrito = (id) => {
        setCarrito(carrito.filter( prod => prod.id !== id))
    };
    const vaciarCarrito = () => {
        setCarrito([])
    };
    const estaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    return(
        <CartProvider value={{
            carrito,
            vaciarCarrito,
            borrarDelCarrito,
            agregarAlCarrito,
            estaEnCarrito
        }}>
            {children}
        </CartProvider>
    )
}