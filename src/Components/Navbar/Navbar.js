import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_logo from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/dropdown_icon.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  let [menu, setMenu] = useState("shop");
  let { getTotalCartItems } = useContext(ShopContext);
  let menuRef = useRef();

  let dropdown_toggle =(e)=>{
     menuRef.current.classList.toggle("nav-menu-visible");
     e.target.classList.toggle("open");
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shopify</p>
      </div>

       <img className="nav-dropdown" src={nav_dropdown} onClick={dropdown_toggle} alt="drp"/>

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none", color: "#626262" }}>
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            to="/womens"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_logo} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
