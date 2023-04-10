const { Pokemon, Type } = require('../db');
const axios = require('axios');

const cleanInfo = ({ data }) => ({
    id: data.id,
    name: data.name,
    image: data.sprites.other.home.front_default,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    created: false,
    types: data.types.map(type => ({ name: type.type.name })),
});

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    const apiInfo = await apiUrl.data.results.map(async (pokemon) => {
        const infoResponse = await axios.get(pokemon.url);
        return cleanInfo(infoResponse);
      });
      return await Promise.all(apiInfo);
};

const getDbInfo = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] },
        },
    });
};

const getAllPokemons = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal; 
};

const getPokemonById = async(id) => {
    const allPokemons = await getAllPokemons();
    const pokemonId = await allPokemons.filter(data => data.id == id);
    return pokemonId;
};

const createPokemon = async(name, image, hp, attack, defense, speed, height, weight, created, types) => {
    let typeDb = await Type.findAll({
        where: { name: types }
    });
    const pokemonCreated = await Pokemon.create({ 
        name, 
        image, 
        hp, 
        attack,
        specialAttack,
        defense,
        specialDefense,
        speed, 
        height, 
        weight, 
        created,
    });
    await pokemonCreated.addTypes(typeDb);
    return pokemonCreated;
};

module.exports = { getAllPokemons, getPokemonById, createPokemon };