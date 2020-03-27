import * as axios from "axios";

const api = axios.create({
  baseURL: `https://swapi.co/api/`,
});

const DAL = {
  async getFilm(episode) {
    const response = await api.get(`films/${episode}`);
    return response.data;
  },
  async getSingleCharacterInfo(url) {
    const response = await axios.get(url);
    return response.data;
  },
  async getDefaultPlanets() {
    const response = await api.get(`planets`);
    return response.data;
  },
  async getSelectedPlanets(url) {
    const response = await axios.get(url);
    return response.data;
  },
};

export default DAL;
