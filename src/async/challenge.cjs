const fetchData = require('../utils/fetchData.cjs');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${url_api}${data.results[5].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch {
        console.error(new Error('Test Error'));
    }
}

anotherFunction(API);