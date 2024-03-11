import React from 'react';
import prodigyProgrammersLogo from "../prodigyProgrammersLogo.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={prodigyProgrammersLogo} alt="" style={{width:'150px'}} />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/programs" className="nav-link">Programs</Link>
        </li>
        <li className="nav-item">
          <Link to="/jobs" className="nav-link">Jobs</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

