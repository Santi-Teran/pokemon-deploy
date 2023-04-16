import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorites, deleteFavorites } from '../../redux/actions';
import style from './Card.module.css';

export const Card = ({ name, image, types, id, myFavorites, addFavorites, deleteFavorites, onClose }) => {

    const defaultClass = style.container;
    const typeClasses = types.reduce((classes, type) => {
        const className = style[type.name];
        return { ...classes, [type.name]: className };
    }, {});
    const cardClass = types.length > 0 ? `${defaultClass} ${typeClasses[types[0].name]}` : defaultClass;

    const [ isFav, setIsFav ] = useState(false)
    useEffect(() => {
       myFavorites.forEach((fav) => {
          if (fav.id === id) {
             setIsFav(true);
          }
       });
    }, [myFavorites, id]);

    const handleFavorite = () => {
       if (isFav) {
          setIsFav(false);
          deleteFavorites(id);
       } else {
          setIsFav(true);
          addFavorites({ name, image, types, id });
       }
    };

    return (
        <div className={cardClass}>
            <div className={style.buttonContainer}>
                { isFav ? 
                    (<button onClick={handleFavorite}>❤️</button>) : 
                    (<button onClick={handleFavorite}>🤍</button>)
                }
                <button onClick={onClose}>❌</button>
            </div>
            <h3>{name}</h3>
            <div className={style.types}>
                {types.map((type, index) => (
                    <span key={index} className={`${style.type} ${style[type.name]}`}>{type.name}</span>))
                }
            </div>
            <Link to={`/detail/${id}`} className={style.link}>
                <img src={image} alt={name} className={style.image} />
            </Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites,
    }
};
 
 const mapDispatchToProps = (dispatch) => {
    return {
       addFavorites: (character) => dispatch(addFavorites(character)),
       deleteFavorites: (id) => dispatch(deleteFavorites(id))
    }
};
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);