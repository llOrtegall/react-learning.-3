import withResults from "../mocks/with-result.json";
import withOutResults from "../mocks/no-result.json";
import { useState } from 'react'

export function useMovies({ search }) {
  const API_MOVIES = `https://www.omdbapi.com/?apikey=4fd5a756&s=${search}`;
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search;

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      //setResponseMovies(withResults)
      fetch(API_MOVIES)
        .then( res => res.json())
        .then(json => {
          setResponseMovies(json);
        })
    } else {
      setResponseMovies(withOutResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}