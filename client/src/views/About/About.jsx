import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import style from './About.module.css';

const About = () => {
  return (
    <div>
        <NavBar />
        <div className={style.mainContainer}>
        <h2>Acerca de la Pokédex</h2>
        <p>La Pokédex es una Single Page Application creada por un estudiante de SoyHenry como proyecto individual. Esta aplicación permite buscar información detallada sobre los Pokémon, incluyendo sus estadísticas, y más.</p>
        <h2>Características de la aplicación</h2>
        <ul>
            <li>Interfaz de usuario intuitiva y fácil de usar</li>
            <li>Información detallada y precisa sobre los Pokémon</li>
            <li>Funcionalidad de búsqueda por nombre de Pokémon</li>
            <li>Funcionalidad de filtrado por origen, alfabeticamente, y ataque</li>
            <li>Posibilidad de crear un nuevo Pokémon con las estadísticas e imagen que quiera</li>
        </ul>
        <h2>Tecnologías utilizadas</h2>
        <ul>
            <li>React para la construcción de la interfaz de usuario</li>
            <li>Redux para manejar el estado de la aplicación</li>
            <li>Node y Express para proporcionar un servidor web y una API para la aplicación</li>
            <li>Sequelize para interactuar con la base de datos de la aplicación</li>
        </ul>
        <h2>Creador de la aplicación</h2>
        <p>Esta aplicación fue creada por Santiago Teran, un estudiante de SoyHenry con conocimientos en JavaScript, React.js, y otras tecnologías web.</p>
        </div>
    </div>
  );
}

export default About;