import { BsSearch } from "react-icons/bs";
import { useMovies } from "./hooks/useMovies";
import "./App.css";
import { useSearch } from "./hooks/useSearch";
import { MoviesVal } from "./components/Poster";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";

function App() {
  const { search, updateSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { Movies, getMovies, loading } = useMovies({ search, sort });
  const busqueda = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 600),
    [getMovies]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };
  const handleChange = (event) => {
    if (event.target.value.startsWith(" ")) return;
    const pelicula = event.target.value;
    updateSearch(pelicula);
    busqueda(pelicula);
  };
  function handleSort() {
    setSort(!sort);
  }
  return (
    <div className="page">
      <header>
        <form onSubmit={handleSubmit}>
          <div className="busqueda">
            <input
              onChange={handleChange}
              value={search}
              name="query"
              placeholder="Search Movies"
              autoComplete="off"
              style={{
                border: "1px solid transparent",
                borderColor: error ? "red" : "transparent",
              }}
            />
            <button disabled={error ? true : false} type="submit">
              <BsSearch />
            </button>
            <div className="caja">
              <strong> Sort </strong>
              <input type="checkbox" onChange={handleSort} checked={sort} />
            </div>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <MoviesVal movies={Movies} search={search} />
        )}
      </main>
    </div>
  );
}

export default App;
