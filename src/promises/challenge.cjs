const fetchData = require('../utils/fetchData.cjs');

const API = 'https://rickandmortyapi.com/api/character/'; // Calling the API

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[4].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.log(err));
