import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/fetchMovies';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchAsyncMovie = async () => {
      const resp = await fetchTrendingMovies();

      setTrendingMovies(resp.results);
    };

    fetchAsyncMovie();
  }, []);

  console.log(trendingMovies);
  return (
    <div>
      <p>Trending movies</p>
      {trendingMovies.map(movie => (
        <p key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </p>
      ))}
    </div>
  );
};

export default Home;
