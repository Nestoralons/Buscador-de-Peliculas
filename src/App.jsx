import { BsSearch } from "react-icons/bs";

import { useMovies } from "./hooks/useMovies";
import "./App.css";
import Poster from "./components/Poster";
import Noresult from "./components/Noresult";

function App() {
  const { Movies } = useMovies();
  const hasMovies = Movies?.length > 0;
  return (
    <div>
      <header>
        <form>
          <div className="busqueda">
            <input placeholder="Search Movies" />
            <button>
              <BsSearch />
            </button>
          </div>
        </form>
      </header>
      <main>{hasMovies ? <Poster Movies={Movies} /> : <Noresult />} </main>
    </div>
  );
}

export default App;
