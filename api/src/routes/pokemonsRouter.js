const { Router } = require('express');
const { createPokemonHandler, getPokemonsHandler, getPokemonHandler } = require('../handlers/pokemonsHandlers');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', getPokemonHandler);
pokemonsRouter.post('/', createPokemonHandler);

module.exports = pokemonsRouter;