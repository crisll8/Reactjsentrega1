import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.css';

const Navbar = () => {
  return  (
    <nav className="navbar">
      <h1 className="navbar-title">Mi Tienda</h1>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
