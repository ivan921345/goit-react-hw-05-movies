import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Movies = lazy(() => import('./pages/Movies'));
const SharedLayout = lazy(() => import('./SharedLayout'));
export const App = () => {
  return (
    <div>
      <SharedLayout />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
