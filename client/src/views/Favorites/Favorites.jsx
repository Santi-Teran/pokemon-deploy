import React from 'react';
import { connect, useDispatch } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import style from './Favorites.module.css';

export const Favorites = ({ myFavorites, props}) => {

  return (
    <div>
        <NavBar />
        <div className={style.mainContainer}>
            <h2>Favorites</h2>
            <div className={style.cards}>
              {myFavorites.map((character) => (
                <Card className={style.card}
                  key={character.id}
                  id= {character.id} 
                  name= {character.name} 
                  hp= {character.hp} 
                  attack= {character.attack} 
                  specialAttack= {character.specialAttack}
                  defense= {character.defense} 
                  specialDefense= {character.specialDefense} 
                  speed= {character.speed} 
                  height= {character.height} 
                  weight= {character.weight}  
                  onClose= {() => props.onClose(character.id)}
               /> ))
         }
      </div>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);