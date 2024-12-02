import { getMovieByName } from 'components/api/fetchMovies';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    setParams({ query: e.target.searchMovie.value });
    getMovieByName(params.get('query')).then(resp => {
      setSearchedMovies(resp.results);
    });
  };
  useEffect(() => {
    if (params.get('query')) {
      getMovieByName(params.get('query')).then(resp => {
        setSearchedMovies(resp.results);
      });
    }
  }, [params]);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="searchMovie" id="" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchedMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
