import React from "react";
import { Link } from "react-router-dom"; // Importing Link
import mi_logo from "../mi_logo.png";
import search_logo from "../search_logo.png";
import user_logo from "../user_logo.jpg";
import cart_logo from "../cart_logo.png";
import "../styles/preNavBar.css";

const PreNavBar = () => {
  return (
    <div className="preNavBar">
      <img src={mi_logo} alt="Mi Logo" />
      <div className="content">
        <Link to="https://www.mi.com/in/store/">Store</Link>
        <Link to="/phone">Phones</Link>
        <Link to="/tablet">Tablets</Link>
        <Link to="/tv-smart-home">TV & Smart Home</Link>
        <Link to="/watch-audio">Smart Watch & Audio</Link>
      </div>
      <div className="content">
        <Link to="/discover">Discover</Link>
        <Link to="/support">Support</Link>
      </div>
      <img src={search_logo} alt="Search Icon" />
      <img src={cart_logo} alt="Cart Icon" />
      <img src={user_logo} alt="User Icon" />
    </div>
  );
};

export default PreNavBar;
