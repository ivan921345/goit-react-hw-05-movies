import { fetchMovieById } from 'components/api/fetchMovies';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const prevLocation = useRef(location);
  const backLinkHref = prevLocation.current.state?.from ?? '/movies';
  const { movieId } = useParams();
  useEffect(() => {
    const asyncFetchMovie = async () => {
      try {
        setStatus('pending');
        const resp = await fetchMovieById(movieId);
        setStatus('idle');
        setCurrentMovie(resp);
      } catch (error) {
        setStatus('rejected');
      }
    };
    asyncFetchMovie();
  }, [movieId]);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  if (status === 'rejected') {
    return (
      <div>There was some error, please reload the page and try again</div>
    );
  }

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <h1>{currentMovie.title}</h1>
      <img src={currentMovie.poster_path} alt="" />
      <p>Overview : {currentMovie.overview}</p>
      <p>Vote avarage: {currentMovie.vote_average}</p>
      <p>Genres:</p>
      <ul>
        {currentMovie.genres ? (
          currentMovie.genres.map(genre => (
            <li key={genre.name}>{genre.name}</li>
          ))
        ) : (
          <p>No genres</p>
        )}
      </ul>
      <p>Additional info</p>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
