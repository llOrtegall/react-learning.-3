import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies.js";
import { useState } from "react";

function App() {
  const { movies: mappedMovies } = useMovies();
  const [query, setQuery] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ query });
    // const fields = Object.fromEntries(new window.FormData(evt.target));
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscardor De Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix etc ..."
          />
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
