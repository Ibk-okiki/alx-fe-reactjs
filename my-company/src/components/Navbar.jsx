import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f4f4f4'
  };
  function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
    </nav>
  );
}
export default Navbar;

