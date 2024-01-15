import React from "react";

const MovieCard = ({movie , imdb_URL_Prop,MovieNotFound_Prop}) =>{
    return(
        <a
        href={imdb_URL_Prop + movie.imdbID + "/"}
        target="_blank"
        rel="noreferrer">

        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>

          <div>
            <img
              src={
                movie.Poster !== "N/A" ? movie.Poster : `${MovieNotFound_Prop}`
              }
              alt={movie.Title}
            />
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>

        </div>

      </a>
      )
}

export default MovieCard;