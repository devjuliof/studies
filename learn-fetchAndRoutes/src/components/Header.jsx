import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <Link to="/">Produtos</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};

export default Header;
