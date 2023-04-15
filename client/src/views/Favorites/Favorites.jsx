import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import style from './Favorites.module.css';

const Favorites = () => {
  return (
    <div>
        <NavBar />
        <div className={style.mainContainer}>
            <h2>Favorites</h2>
        </div>
    </div>
  );
}

export default Favorites;