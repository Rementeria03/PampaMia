import React from 'react'
import { CartItem } from '../CartItem/CartItem'

export const ProdOfCart = ({carrito}) => {

    return (
        <>
            {
                carrito.map((item) => {
                    return <CartItem key={item.id} {...item}/>
                })
            }   
        </>
    )
}
