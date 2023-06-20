import { useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);
  const getMovies = async () => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const Newmovies = await searchMovies({ search });
      setMovies(Newmovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return { Movies: movies, getMovies, loading };
}
