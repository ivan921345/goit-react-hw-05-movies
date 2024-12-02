import axios from 'axios';

const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGNlM2QyYTgwOTM5YzgwOGI1ZTc2MmMyYzJiMTE0OSIsIm5iZiI6MTczMjk2ODI3Mi42NTkwMDAyLCJzdWIiOiI2NzRhZmY1MGYwNDNiYzhhNjc3MWE3NWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4PaZv8ZYXrL6wuwBrMkhPhToNCBZmNtTjXhosCA8S8s';
const API_KEY = '80ce3d2a80939c808b5e762c2c2b1149';

axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

export const fetchTrendingMovies = async (timeWindow = 'day') => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${timeWindow}`,
      {
        params: {
          api_key: API_KEY,
          include_adult: false,
          language: 'en-US',
        },
      }
    );
    return resp.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const fetchMovieById = async movieId => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: API_KEY,
          include_adult: false,
          language: 'en-US',
        },
      }
    );
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMovieCredits = async movieId => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        params: {
          api_key: API_KEY,
          include_adult: false,
          language: 'en-US',
        },
      }
    );
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMovieReviews = async movieId => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      {
        params: {
          api_key: API_KEY,
          include_adult: false,
          language: 'en-US',
        },
      }
    );
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getMovieByName = async movieName => {
  try {
    const resp = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        query: movieName,
        api_key: API_KEY,
        include_adult: false,
        language: 'en-US',
      },
    });
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
