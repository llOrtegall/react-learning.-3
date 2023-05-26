import "./styles/App.css";
import "./styles/index.css";
// TODO: importaciones 
import { useEffect, useRef, useState } from "react"; // cada vez que cambia no vuelve a renderizar el componente
import { Movies } from './components/Movies.jsx';
import { useMovies } from "./hooks/useMovies.js";

function App() {

  const { movies } = useMovies();
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ query })
  }

  const handleChange = (evt) => {
    setQuery(evt.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('No Se Puede Buscar Una Película Vacía');
      return
    }

    if(query.match(/^\d+$/)){
      setError('No Se Puede Buscar Una Película con un numero')
      return
    }
  }, [query])

  return (
    <div className="page">
      <header>
        <h1>Buscador De Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" placeholder="Avergers, Star Wars, The Matrix" />
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
