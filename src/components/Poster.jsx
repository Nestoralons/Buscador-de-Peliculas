/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState } from "react";
import "./Poster.css";
import { useCatimage } from "../hooks/useCatimage";
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
  const { URL } = useCatimage();
  return URL ? (
    <img
      className="gato"
      src={URL}
      alt="No se ha encontrado ninguna pelicula"
    />
  ) : (
    ""
  );
}

export function MoviesVal({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <Poster Movies={movies} /> : <NoMoviesResults />;
}
