import React from "react";
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemon } from "../../redux/actions";
import NavBar from '../../components/NavBar/NavBar'
import style from './Detail.module.css';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Loading from "../../components/Loading/Loading";


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const pokemon = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(getPokemon(id));
    }, [id, dispatch]);

    return (
        <div>
            <NavBar />
            <div className={style.mainContainer}>
                {pokemon.length > 0
                 ? <>
                        <div className={style.firstContainer}>
                            <Link to='/home'><button>Volver</button></Link>
                            <h2>{pokemon[0].name.toUpperCase()}</h2>
                            <ul>{pokemon[0].types.map((type) => (<li key={type.name}>{type.name}</li>))}</ul>
                            <img src={pokemon[0].image} alt={pokemon[0].name}></img>
                        </div>
                        <div className={style.secondContainer}>
                            <div className={style.stats}>
                                <p>Vida</p>
                                <span>{pokemon[0].hp}</span>
                                <ProgressBar value={pokemon[0].hp} maxValue={200} />
                            </div>
                            <div className={style.stats}>
                                <p>Ataque</p>
                                <span>{pokemon[0].attack}</span>
                                <ProgressBar value={pokemon[0].attack} maxValue={200} />
                            </div>
                            <div className={style.stats}>
                                <p>Defensa</p>
                                <span>{pokemon[0].defense}</span>
                                <ProgressBar value={pokemon[0].defense} maxValue={200} />
                            </div>
                            <div className={style.stats}>
                                <p>Ataque especial</p>
                                <span>{pokemon[0].specialAttack}</span>
                                <ProgressBar value={pokemon[0].specialAttack} maxValue={200} />
                            </div>
                            <div className={style.stats}>
                                <p>Defensa especial</p>
                                <span>{pokemon[0].specialDefense}</span>
                                <ProgressBar value={pokemon[0].specialDefense} maxValue={200} />
                            </div>
                            <div className={style.stats}>
                                <p>Velocidad</p>
                                <span>{pokemon[0].speed}</span>
                                <ProgressBar value={pokemon[0].speed} maxValue={200} />
                            </div>
                            <div className={style.stats}>
                                <p>Altura</p>
                                <p>{pokemon[0].height / 10}m</p>
                            </div>
                            <div className={style.stats}>
                                <p>Peso</p>
                                <p> {pokemon[0].weight / 10}kg</p>
                            </div>
                        </div>
                    </>
                : <Loading />}
            </div>        
        </div>
    );
};

export default Detail;