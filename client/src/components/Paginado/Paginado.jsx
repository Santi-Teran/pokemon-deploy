import React, { useState } from "react";
import style from './Paginado.module.css';

const Paginado = ({ pokemonsPerPage, allPokemons, paginado}) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i+1)
    };

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (number) => {
        setCurrentPage(number);
        paginado(number);
    };

    return (
        <nav className={style.container}>
            <ul className={style.ul}>
                {pageNumbers && pageNumbers.map(number =>(
                    <li className={style.li} key={number}>
                        <button 
                            className={currentPage ? style.activeButton : ''}
                            onClick={() => handlePageChange(number)}>
                                {number}
                        </button>
                    </li>))
                }
            </ul>
        </nav>
    );
};

export default Paginado;