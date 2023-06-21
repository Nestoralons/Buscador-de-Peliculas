const API_KEY = "604b862b";
export const searchMovies = async ({ search }) => {
  if (search === "") return;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const res = await response.json();
    const Peli = res.Search;

    return Peli?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error Searching Movies");
  }
};
