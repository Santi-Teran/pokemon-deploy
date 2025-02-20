import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getPokemonByName,
  filterByType,
  filterByOrigin,
  orderByName,
  orderByAttack,
} from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);
  const [name, setName] = useState("");

  // eslint-disable-next-line
  const [order, setOrder] = useState("");
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);

  const handleType = (e) => {
    dispatch(filterByType(e.target.value));
  };

  const handleOrigin = (e) => {
    dispatch(filterByOrigin(e.target.value));
  };

  const handleName = (e) => {
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  const handleAttack = (e) => {
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(name));
    setName("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className={style.mainContainer}>
      <form method="get" className={style.searchContainer}>
        <input
          value={name}
          type="text"
          placeholder="Buscar..."
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}></button>
      </form>
      <div className={style.filterContainer}>
        FILTROS
        <div className={style.select}>
          POR TIPO <br />
          <select onChange={handleType}>
            <option value="todos">Selecciona un tipo</option>
            <option value="todos">Todos</option>
            {types ? (
              types.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
        <div className={style.select}>
          POR ORIGEN <br />
          <button
            className={style.leftButton}
            onClick={handleOrigin}
            value="api"
          >
            ORIGINALES
          </button>
          <button
            className={style.rightButton}
            onClick={handleOrigin}
            value="db"
          >
            CREADOS
          </button>
        </div>
        <div className={style.select}>
          POR NOMBRE <br />
          <button className={style.leftButton} onClick={handleName} value="asc">
            A - Z
          </button>
          <button
            className={style.rightButton}
            onClick={handleName}
            value="des"
          >
            Z - A
          </button>
        </div>
        <div className={style.select}>
          POR ATAQUE <br />
          <button
            className={style.leftButton}
            onClick={handleAttack}
            value="max"
          >
            MAXIMO
          </button>
          <button
            className={style.rightButton}
            onClick={handleAttack}
            value="min"
          >
            MINIMO
          </button>
        </div>
      </div>
      <button className={style.but} onClick={handleClick}>
        Volver a cargar todos los pokemons
      </button>
    </div>
  );
};

export default SearchBar;
