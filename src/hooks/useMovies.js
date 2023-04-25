import responseMovies from "../json/result.json";
// import withoutResults from '../json/no-result.json'

export function useMovies() {
  const movies = responseMovies.Search;
  const mappedMovies = movies?.map((movies) => ({
    id: movies.imdbID,
    title: movies.Title,
    year: movies.Year,
    image: movies.Poster,
  }));
  return { movies: mappedMovies };
}
