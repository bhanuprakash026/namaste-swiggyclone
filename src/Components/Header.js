import React from "react";
import { Link } from "react-router-dom";


const Header = () => {



  return (
    <div className="flex items-center justify-between p-1 shadow-md mb-2">
      <div className="logo-container">
        <Link to='/'><img className="w-24" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" alt="logo"/></Link>
        
      </div>

      <div className="nav-links-container">
        <ul className="flex">
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header