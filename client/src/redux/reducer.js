import { GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES, CREATE_POKEMON, FILTER_BY_TYPE, FILTER_BY_ORIGIN, ORDER_BY_NAME, ORDER_BY_ATTACK, GET_POKEMON } from "./actions";

const initialState = {
    pokemons: [],
    pokemon: [],
    types: [],
    allPokemons: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_POKEMONS: {
            return { 
                ...state, 
                pokemons: payload, 
                allPokemons: payload 
            }
        }
        case GET_POKEMON: {
            return {
                ...state,
                pokemon: payload
            }
        }
        case GET_POKEMON_BY_NAME: {
            return {
                ...state,
                pokemons: payload
            }
        }
        case GET_TYPES: {
            return { 
                ...state, 
                types: payload 
            }
        }
        case CREATE_POKEMON: {
            return {
                ...state
            }
        }
        case FILTER_BY_ORIGIN: {
            const allPokemons = state.allPokemons;
            const originFiltered = payload === 'db' 
                ? allPokemons.filter(el => el.created) 
                : allPokemons.filter(el => !el.created)
            return {
                ...state, 
                pokemons: payload === 'todos' 
                    ? state.allPokemons 
                    : originFiltered
            }
        }
        case FILTER_BY_TYPE: {
            const allPokemons = state.allPokemons;
            const typeFiltered = payload === 'todos' 
                ? allPokemons 
                : allPokemons.filter(pokemon => pokemon.types.some(type => type.name === payload));

            return { 
                ...state, 
                pokemons: typeFiltered 
            }
        }
        case ORDER_BY_NAME:
            const sortedByName = [...state.pokemons].sort((a, b) => payload === 'asc' 
                ? a.name.localeCompare(b.name) 
                : b.name.localeCompare(a.name));
            return {
                ...state,
                pokemons: sortedByName,
            };
        case ORDER_BY_ATTACK:
            const sortedByAttack = [...state.pokemons].sort((a, b) =>
                payload === 'min' 
                    ? a.attack - b.attack 
                    : b.attack - a.attack);
            return {
                ...state,
                pokemons: sortedByAttack,
            };
        default: {
            return { ...state }
        }
    }
};

export default rootReducer;