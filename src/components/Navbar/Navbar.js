import React from "react";
import styles from './Navbar.module.css';
import {Link} from "react-router-dom";
import Logo from "../../images/star-wars-logo.png";

const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles['header-logo']}>

               <Link to="/">
                   <img className={styles['header-logo__image']} src={Logo} alt="star-wars-logo"/>
               </Link>

            </div>
            <ul className={styles['navbar-list']}>

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
        </nav>
    )
};

export default Navbar;