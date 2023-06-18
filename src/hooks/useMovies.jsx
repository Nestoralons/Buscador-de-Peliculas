import result from "../mocks/result.json";
export function useMovies() {
  const Peli = result.Search;
  const Movies = Peli.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return { Movies };
}
