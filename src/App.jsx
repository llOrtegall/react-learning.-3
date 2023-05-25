import "./styles/App.css";
import "./styles/index.css";
import { Movies } from './components/Movies.jsx';
import { useMovies } from "./hooks/useMovies.js";

function App() {

  const { movies } = useMovies()

  return (
    <div className="page">
      <header>
        <h1>Buscador De Peliculas</h1>
        <form className="form">
          <input placeholder="Avergers, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
