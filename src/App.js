import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import { CartContext } from './contexts/CartContext';

function App() {

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

  return (
    <CartContext.Provider value={{
      carrito,
      agregarAlCarrito,
      borrarDelCarrito,
      vaciarCarrito,
      estaEnCarrito
    }}>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/productos" element={<ItemListContainer />}/>
          <Route path="/productos/:catId" element={<ItemListContainer />}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<CartView />} />
          <Route path="/nosotros" element={<ItemListContainer />}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
