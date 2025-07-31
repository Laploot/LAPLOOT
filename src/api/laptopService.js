import axios from 'axios';

const API = 'http://localhost:5000/api/laptops';

export const fetchLaptops = async () => {
  const res = await axios.get(API);
  return res.data;
};
