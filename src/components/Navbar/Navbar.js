import React from "react";
import styles from './Navbar.module.css';
import {Link} from "react-router-dom";
import Menu from '../../images/icons8-меню.svg'
import Logo from "../../images/star-wars-logo.png";

const Navbar = () => {
    function activateMenu() {
        const menu = document.getElementById('navbar-list');
        menu.style.display = 'flex';
        menu.style.justifyContent = 'space-around';
        menu.style.flexDirection = 'column';
        menu.style.alignItems = 'center';
        menu.classList.add('menu-respons');
        document.getElementById('menu-btn').style.display = 'none';
    }
    function closeBtn() {
        const menu = document.getElementById('navbar-list');
        menu.style.display = 'none';
        menu.classList.remove('menu-respons');
        document.getElementById('menu-btn').style.display = 'block';
    }
    return (
        <nav className={styles.navigation}>
            <div className={styles['header-logo']}>

               <Link to="/">
                   <img className={styles['header-logo__image']} src={Logo} alt="star-wars-logo"/>
               </Link>

            </div>
            <div id='menu-btn' onClick={()=>activateMenu()} className={styles['menu-nav']}>
                <img src={Menu} alt="menu-icon"/>
            </div>
            <ul id="navbar-list" className={styles['navbar-list']}>
                <div onClick={()=>closeBtn()} className={styles['close-btn']}>
                    &times;
                </div>
                <Link onClick = {()=>closeBtn()} to="/">
                    <li>Home</li>
                </Link>

                <Link onClick = {()=>closeBtn()} to="/films">
                    <li>Films</li>
                </Link>

                <Link onClick = {()=>closeBtn()} to="/planets">
                    <li>Planets</li>
                </Link>

            </ul>
        </nav>
    )
};

export default Navbar;