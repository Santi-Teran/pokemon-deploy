import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import Loading from "../Loading/Loading";
import style from './CardsContainer.module.css';
import { getTypes } from "../../redux/actions";

const CardsContainer = () => {

    const dispatch = useDispatch();

    const allPokemons = useSelector((state) => state.pokemons);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
    const iOfLastPokemon = currentPage * pokemonsPerPage;
    const iOfFirstPokemon = iOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(iOfFirstPokemon, iOfLastPokemon);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    return(
        <div className={style.container}>
            <div className={style.cards}>
                { allPokemons.length > 0 
                ? currentPokemons.map( data => 
                    <Card className={style.card} key={data.id} name={data.name.toUpperCase()} image={data.image} types={data.types} id={data.id}/>)
                : <Loading />
                }
            </div>
            <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado} />
        </div>
    );
};

export default CardsContainer;