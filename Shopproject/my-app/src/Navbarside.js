import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
const Navbarside = () => {
  return (
    <div class="Nvbside">
      <h1>Kardelen</h1>
    

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/login">login</Link>
        </li>

        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbarside;
