import axios from 'axios';

export async function getMsiGames() {
  try {
    const response = await axios.get('http://localhost:5500/api/matches/msi');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getGameById(id) {
  try {
    const response = await axios.get(`http://localhost:5500/api/matches/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getShortGameById(id) {
  try {
    const response = await axios.get(`http://localhost:5500/api/matches/${id}/short`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}
