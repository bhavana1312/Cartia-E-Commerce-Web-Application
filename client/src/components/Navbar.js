import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";



const Navbar = ({ click }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;


    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const navLinkStyles = ({isActive}) => {
        return { boxShadow: isActive ? "var(--button-shadow-active)" : "var(--button-shadow)" }
    }

    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <div className="brand">CARTIA</div>
          </NavLink>
        </div>
        <div className="container-all-links">
          <div className="container-navbar-links-1">
            <ul className="navbar-links">
              <li>
                <NavLink
                  style={navLinkStyles}
                  to={"/"}
                  className="nav-category-link"
                >
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={navLinkStyles}
                  to={"/about"}
                  className="nav-category-link"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={navLinkStyles}
                  to={"/cart"}
                  className="cart-link"
                >
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                  <span className="cartlogo-badge">{getCartCount()}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="hamburger-menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    );
}


export default Navbar