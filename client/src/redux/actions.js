import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const GET_TYPES = 'GET_TYPES';
export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITE";
export const DELETE_FAVORITES = "DELETE_FAVORITE";
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK';

export const getPokemons = () => {
    return async function(dispatch) {
        const json = await axios.get("/pokemons");

        dispatch({
            type: GET_POKEMONS,
            payload: json.data
        });
    };
};

export const getPokemon = (id) => {
    return async function(dispatch) {
        const json = await axios.get(`/pokemons/${id}`);

        dispatch({
            type: GET_POKEMON,
            payload: json.data
        });
    };
};

export const getPokemonByName = (name) => {
    return async function(dispatch) {
        const json = await axios.get(`/pokemons?name=${name}`);

        dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: json.data
        });
    };
};

export const getTypes = () => {
    return async function(dispatch) {
        const json = await axios.get("/types");

        dispatch({
            type: GET_TYPES,
            payload: json.data
        });
    };
};

export const getFavorites = () => {
    return async function(dispatch) {
        const json = await axios.get("/favorites");

        dispatch({
            type: GET_FAVORITES,
            payload: json.data
        })
    }
};

export const addFavorites = (pokemon) => {
    return {
        type: ADD_FAVORITES,
        payload: pokemon,
    };
};
  
export const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id,
    };
};

export const CreatePokemon = (payload) => {
    return async function(dispatch) {
        const response = await axios.post("/pokemons", payload);

        return response;
    }
    
};

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin,
    };
};

export const filterByType = (types) => {
    return {
      type: FILTER_BY_TYPE,
      payload: types
    };
};

export const orderByName = (order) => {
    return {
      type: ORDER_BY_NAME,
      payload: order,
    };
  };
  
  export const orderByAttack = (order) => {
    return {
      type: ORDER_BY_ATTACK,
      payload: order,
    };
  };


