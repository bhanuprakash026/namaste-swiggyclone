import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" className="logo-img" alt="logo"/>
      </div>

      <div className="nav-links-container">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="contact">Contact Us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header