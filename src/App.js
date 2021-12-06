import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;
