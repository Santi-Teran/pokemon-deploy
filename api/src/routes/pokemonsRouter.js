const { Router } = require('express');
const { createPokemonHandler, getPokemonsHandler, getPokemonHandler, deletePokemon } = require('../handlers/pokemonsHandlers');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', getPokemonHandler);
pokemonsRouter.post('/', createPokemonHandler);
pokemonsRouter.delete('/:id', deletePokemon)

module.exports = pokemonsRouter;