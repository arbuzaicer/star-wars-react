import * as axios from 'axios';

const connection = axios.create({
    baseURL: `https://swapi.co/api/`,
});

const DAL = {
    getFilm(episode) {
        return connection.get(`films/${episode}`)
            .then(response=>response.data)
    },
    getSingleCharacterInfo(url) {
        return axios.create({
            baseURL: url
        }).get()
            .then(response=>response.data)
    }
};

export default DAL;
