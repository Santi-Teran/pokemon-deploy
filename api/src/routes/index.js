const { Router } = require('express');
const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');
const favoritesRouter = require('./favoritesRouter');

const router = Router();

router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);
router.use('/favorites', favoritesRouter);


module.exports = router;