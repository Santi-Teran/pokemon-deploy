import React from "react";
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ name, image, types, id }) =>{
    const defaultClass = style.container;

    const typeClasses = types.reduce((classes, type) => {
        const className = style[type.name];
        return { ...classes, [type.name]: className };
    }, {});

    const cardClass = types.length > 0 ? `${defaultClass} ${typeClasses[types[0].name]}` : defaultClass;

    return (
        <div className={cardClass}>
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

export default Card; 