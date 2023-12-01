import axios from 'axios';
export const BASE_URL = 'https://newsapi.org/v2/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHeadlineByCountry = async () => {
  axios
    .get(
      'https://newsapi.org/v2/top-headlines?country=id&apiKey=9bcd838cbee64f0888c78c72e92f0a89'
    )
    .then((response: any) => {
      // handle success
      return response.data;
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
    });
};

export const fetchSearchDataApi = async (query: any) => {
  const API_KEY = '9bcd838cbee64f0888c78c72e92f0a89';
  try {
    const data = await axios.get(
      ` https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
