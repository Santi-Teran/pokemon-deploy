const { Type } = require('../db');
const axios = require('axios');

const getAllTypes = async() => {
    const apiTypes = await axios.get(`https://pokeapi.co/api/v2/type`);
    const types = apiTypes.data.results.map(data => data.name);

    types.forEach(data => {
        Type.findOrCreate({
            where: { name: data }
        });
    });

    return allTypes = await Type.findAll();
};

module.exports = { getAllTypes };