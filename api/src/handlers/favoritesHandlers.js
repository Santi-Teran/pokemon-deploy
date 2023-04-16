const favs = require('../utils/favorites');

const getFav = (req, res) => {
    try {
        res.status(200).json(favs)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
};

const postFav = (req, res) => {
    const { name, image, hp, attack, specialAttack, defense, specialDefense, speed, height, weight, created, types } = req.body;

    favs.push({ name, image, hp, attack, specialAttack, defense, specialDefense, speed, height, weight, created, types });
  
    res.status(200).json({ message: 'Personaje agregado a favoritos' });
};

const deleteFav = (req, res) => {
    const { id } = req.params;
  
    const index = favs.findIndex((p) => p.id === parseInt(id));
  
    if (index !== -1) {
        favs.splice(index, 1);
        res.status(200).json({ message: 'Personaje eliminado de favoritos' });
    } else {
        res.status(404).json({ message: 'Personaje no encontrado en favoritos' });
    }
};

module.exports = { getFav, postFav, deleteFav };