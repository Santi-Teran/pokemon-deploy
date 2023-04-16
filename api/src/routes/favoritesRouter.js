const { Router } = require('express');
const { getFav, postFav, deleteFav } = require('../handlers/favoritesHandlers');

const favoritesRouter = Router();

favoritesRouter.get('/', getFav);
favoritesRouter.post('/', postFav);
favoritesRouter.delete('/:id', deleteFav);

module.exports = favoritesRouter;