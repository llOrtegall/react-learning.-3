import "./App.css";
import responseMovies from "./json/result.json";
import withNoResult from "./json/no-result.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

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
        {hasMovies ? (
          <ul>
            {movies.map((movies) => (
              <li key={movies.imdbID}>
                <h3>{movies.Title}</h3>
                <p>{movies.Year}</p>
                <img src={movies.Poster} alt={movies.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>
            No se encontraron resultados o peliculas intenta con otro nombre
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
