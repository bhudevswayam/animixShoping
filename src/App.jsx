import { CartProvider } from "react-use-cart";
import React from "react";
import Navbar from "../modules/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "../modules/Cart";
import Home from "../modules/Home";
import "./App.css"
import Naruto from "../modules/Naruto.jsx";
import OnePiece from "../modules/OnePiece";
import Contact from "../modules/Contact";
const App = () =>{
  return <>
  <CartProvider>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/naruto' element={<Naruto />}/>
          <Route path='/one-piece' element={<OnePiece />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
  </CartProvider>
  </>
}

export default App;