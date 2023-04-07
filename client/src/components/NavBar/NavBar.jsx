import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
import logo from '../../images/pokemon-logo.png';

const NavBar = () => {    
    return (
        <nav className={style.container}>
            <img src={logo} className={style.image} alt="pokemon-logo"></img>
            <div className={style.buttonContainer}>
              <Link to='/home'><button>Home</button></Link>
              <Link to='/create'><button>Crear Pokemon</button></Link>
              <Link to='/about'><button>About</button></Link>
              <Link to='/'><button>Logout</button></Link>
            </div>
        </nav>
    );
};

export default NavBar;