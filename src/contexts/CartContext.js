import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ( { children }) => {

    const [carrito, setCarrito] = useState([]);

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

    const totalCompra = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const cantidadCarrito = () =>{
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }


    return(
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            borrarDelCarrito,
            vaciarCarrito,
            estaEnCarrito,
            cantidadCarrito,
            totalCompra
        }}>
            {children}
        </CartContext.Provider>
    )
}