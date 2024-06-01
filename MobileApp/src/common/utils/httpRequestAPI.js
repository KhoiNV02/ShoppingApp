import axios from 'axios';
import API from './API';
const request = axios.create({
  baseURL: API,
});
export const makeRequest = async (apiConfig) => {
  const  response = await request(apiConfig);
  return response.data;
};
export default request;
