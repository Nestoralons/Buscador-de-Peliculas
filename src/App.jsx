import { BsSearch } from "react-icons/bs";
//import { useRef } from "react";
import { useMovies } from "./hooks/useMovies";
import "./App.css";
import { useSearch } from "./hooks/useSearch";
import { MoviesVal } from "./components/Poster";

function App() {
  const { search, updateSearch, error } = useSearch();
  const { Movies, getMovies, loading } = useMovies({ search });
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };
  const handleChange = (event) => {
    if (event.target.value.startsWith(" ")) return;
    updateSearch(event.target.value);
  };

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
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <MoviesVal movies={Movies} />}
      </main>
    </div>
  );
}

export default App;
