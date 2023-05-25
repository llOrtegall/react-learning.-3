function ListOfMovies({ movies }) {

  //* Por el momento esta atado a como funciona la API 

  return (
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  );
};

function NoMoviesResults() {
  return <p>No se encontraron resultados para esta Búsqueda</p>;
};

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}