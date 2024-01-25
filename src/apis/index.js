import _axios from 'axios';

const axios = _axios.create({ baseURL: 'https://openmind-api.vercel.app/3-2' });

export async function postUserApi(name) {
  const response = await axios.post('/subjects/', { name });
  return response.data;
}
