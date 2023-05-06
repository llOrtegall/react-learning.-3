import "./App.css";
import responseMovies from "./mocks/with-result.json";
//import withOutResults from "./mocks/no-result.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  const renderMovies = () => {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    );
  };

  const renderNoResults = () => {
    return <p>No se encontraron resultados para esta Búsqueda</p>;
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador De Peliculas</h1>
        <form className="form">
          <input placeholder="Avergers, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>{hasMovies ? renderMovies() : renderNoResults()}</main>
    </div>
  );
}

export default App;
