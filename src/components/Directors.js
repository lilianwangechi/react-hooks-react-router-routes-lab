import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {
        directors.map ((director) =>(
          <div key={director.name}>
            Director: {director.name} 
            <ul> Movies:
              {director.movies.map ((movie) => (
                <li key={movie}>{movie}</li>))}
            </ul>
          </div>)
      )}
      </div>
    </div>
  )}

export default Directors;
