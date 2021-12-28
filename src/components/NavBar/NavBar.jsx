import React, { useContext } from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget.js/CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext'

export default function NavBar(){

    const { carrito } = useContext(CartContext)

    return(
        <header className="App-header">
            <span id='logo'>PAMPA</span>
            <nav className="header-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/productos/mates">Mates</Link>
                    <Link to="/productos/utensilios">Utensilios</Link>
                    <Link to="/productos/yerberas">Yerberas</Link>
                    {carrito.length > 0 && <CartWidget />}
            </nav>
        </header>
    );
};