import React, { useState,} from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import LocationPopup from "./LocationPopup";


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-1 shadow-md mb-2 ">
        <div className="logo-container">
          <div className="flex items-center justify-center">
            <Link to='/'>
              <img className="w-24" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" alt="logo" />
            </Link>
            <FaLocationDot style={{ color: "orange", fontSize: "25px", marginLeft: "35px", cursor: "pointer" }} onClick={() => {
              console.log("Clicked")
              setShowModal(true)
            }} />
            {showModal && <LocationPopup onClose={() => setShowModal(false)}/>}
            
          </div>
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
      
    </div>
  );
};

export default Header;
