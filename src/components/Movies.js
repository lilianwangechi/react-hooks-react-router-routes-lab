
import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    <div>
      {
      movies.map ((movie) =>(
        <div key={movie.title}>
          Movie: {movie.title} <br></br>

          Time: {movie.time}
          <ul>
            {movie.genres.map ((genre) => (
              <li key={genre}>{genre}</li>))}
          </ul>
        </div>)
    )}
    </div>
  </div>
)}

export default Movies;
