import axios from 'axios';

const API = 'process.env.REACT_APP_API_URL/api/laptops';

export const fetchLaptops = async () => {
  const res = await axios.get(API);
  return res.data;
};
