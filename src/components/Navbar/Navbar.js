import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../assets/icons8-меню.svg";
import Logo from "../../assets/star-wars-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const activateMenu = () => {
    const menu = document.getElementById("navbar-list-mobile");
    menu.classList.toggle("disable");
    menu.classList.toggle("menu-respons");
    document.getElementById("menu-btn").style.display = "none";
  };

  const closeBtn = () => {
    const menu = document.getElementById("navbar-list-mobile");
    menu.classList.toggle("disable");
    menu.classList.toggle("menu-respons");
    document.getElementById("menu-btn").style.display = "block";
  };

  return (
    <nav className="navigation">
      <div className="header-logo">
        <Link to="/">
          <img className="header-logo__image" src={Logo} alt="star-wars-logo" />
        </Link>
      </div>
      <div id="menu-btn" onClick={activateMenu} className="menu-nav">
        <img src={Menu} alt="menu-icon" />
      </div>

      <ul className="navbar-list-desktop">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/films">
          <li>Films</li>
        </Link>

        <Link to="/planets">
          <li>Planets</li>
        </Link>
      </ul>

      <ul id="navbar-list-mobile" className="disable">
        <div onClick={closeBtn} className="close-btn">
          &times;
        </div>
        <Link onClick={closeBtn} to="/">
          <li className="ref-mobile">Home</li>
        </Link>

        <Link onClick={closeBtn} to="/films">
          <li className="ref-mobile">Films</li>
        </Link>

        <Link onClick={closeBtn} to="/planets">
          <li className="ref-mobile">Planets</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
