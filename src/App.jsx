import "./styles/App.css";
import "./styles/index.css";
// TODO: importaciones 
import { useEffect, useState, useRef } from "react"; // cada vez que cambia no vuelve a renderizar el componente
import { Movies } from './components/Movies.jsx';
import { useMovies } from "./hooks/useMovies.js";

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''; //true
      return
    }
    if (search === '') {
      setError('No Se Puede Buscar Una Película Vacía');
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No Se Puede Buscar Una Película con un numero')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres');
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getMovies();
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (evt) => {
    setSearch(evt.target.value)
  }


  return (
    <div className="page">
      <header>
        <h1>Buscador De Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name="query" placeholder="Avergers, Star Wars, The Matrix" />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}> {error} </p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  );
}

export default App;
