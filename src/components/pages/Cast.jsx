import { getMovieCredits } from 'components/api/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCredits(movieId).then(resp => {
      setCast(resp.cast);
    });
  }, [movieId]);
  console.log(cast);
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={actor.profile_path} alt={actor.name} />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
