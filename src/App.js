import "./App.css";
import React, { useState, useEffect } from "react";
import MovieNotFound from "./movie.svg";
import MovieCard from "./MovieCard";
import Input from "./Input.jsx";
import Empty from "./Empty.jsx";

const API_URL = "http://www.omdbapi.com?apikey=7fab20b4";

function App() {
  const imdb_URL = "https://www.imdb.com/title/";
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">

      <h1>MovieLand</h1>
      
      <Input
        searchTerm_Prop={searchTerm}
        setSearchTermProp={setSearchTerm}
        searchMoviesProp={searchMovies}
      />
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movieEle) => (
            <MovieCard
              movie={movieEle}
              imdb_URL_Prop={imdb_URL}
              MovieNotFound_Prop={MovieNotFound}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default App;
