import React from "react";
import { Link } from 'react-router-dom';
import style from './Landing.module.css';
import logo from '../../images/pokemon-logo.png';

const Landing = () => {
    return (
        <div className={style.container}>
            <img src={logo} className={style.image} alt="pokemon-logo"></img>
            <Link to='/home'><button className={style.button}>INGRESAR</button></Link>
        </div>
    );
};

export default Landing;