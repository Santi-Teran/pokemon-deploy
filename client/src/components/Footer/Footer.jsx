import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import { ReactComponent as GitIcon } from '../../icons/git-hub.svg'
import { ReactComponent as IgIcon } from '../../icons/instagram.svg'
import { ReactComponent as LinkedinIcon } from '../../icons/linkedin.svg'

function Footer() {
  return (
    <footer>
        <div className={style.container}>
            <div className={style.about}>
                <h3>Pokemon App</h3>
                <p>Esta es una Single Page Application, con las tecnologias de React, Redux, Node, Express y Sequelize.</p>
                <p>Para mas informacion: <Link className={style.link} to='/about'>About</Link></p>
            </div>
            <div className={style.info}>
                <h3>Información de contacto</h3>
                <p>Mar del Plata, Argentina</p>
                <p>Teléfono: +54 223 123-4567</p>
                <p>Email: santiagoteranmatias@gmail.com</p>
            </div>
            <div className={style.redes}>
                <h3>Redes sociales</h3>
                <ul>
                    <li><a href='https://github.com/Santi-Teran' target='_BLANK' rel="noreferrer"> <GitIcon className={style.icon} /></a></li>
                    <li><a href='https://instagram.com/santii.teran/' target='_BLANK' rel="noreferrer"> <IgIcon className={style.icon} /></a></li>
                    <li><a href='https://linkedin.com/in/santi-teran/' target='_BLANK' rel="noreferrer"> <LinkedinIcon className={style.icon} /></a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;