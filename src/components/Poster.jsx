/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Poster.css";
function Poster({ Movies }) {
  return (
    <ul className="movies">
      {Movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}
function NoMoviesResults() {
  return <p>No se encontraron peliculas para esta busqueda</p>;
}

export function MoviesVal({ movies }) {
  const hasMovies = movies?.length > 0;
  console.log(hasMovies);
  return hasMovies ? <Poster Movies={movies} /> : <NoMoviesResults />;
}
