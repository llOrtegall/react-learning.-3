import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies.js";

function App() {
  const { movies: mappedMovies } = useMovies();

  return (
    <div className="page">
      <header>
        <h1>Buscardor De Peliculas</h1>
        <form className="form" action="">
          <input placeholder="Avengers, Star Wars, The Matrix etc ..." />
          <button type="submit"> Buscar </button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
