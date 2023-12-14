import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

const fetchAdverts = async (page = 1) => {
  // const { data } = await axios.get(`${URL}`, {
  //   headers: { "content-type": "application/json" },
  //   params: { page: `${page}`, limit: 8 },
  // });
  const { data } = await axios.get(`${URL}?page=${page}&limit=8`);
  return data;
};

export default fetchAdverts;
