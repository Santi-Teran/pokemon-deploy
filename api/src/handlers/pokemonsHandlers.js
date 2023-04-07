const { createPokemon, getAllPokemons, getPokemonById } = require('../controllers/pokemonsControllers')

const getPokemonsHandler = async(req, res) => {
    try {
        const { name } = req.query;
        let allPokemons = await getAllPokemons();
        if (name) {
            let pokemonName = await allPokemons.filter(el => el.name.toLowerCase().includes(name.toLocaleLowerCase()))
            pokemonName.length 
            ? res.status(200).json(pokemonName)
            : res.status(400).send('No existe ese Pokemon');
        } else {
            res.status(200).send(allPokemons);
        }
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};

const getPokemonHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const pokemonId = await getPokemonById(id);
        res.status(200).json(pokemonId);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};

const createPokemonHandler = async(req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight, created, types } = req.body;
        const pokemonCreated = await createPokemon(name, image, hp, attack, defense, speed, height, weight, created, types);
        res.status(200).json(pokemonCreated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getPokemonsHandler, getPokemonHandler, createPokemonHandler };