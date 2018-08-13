import React from "react";

const MovieCard = props => {
  return (
    <div className="card">
      <img className="movie-img" src={props.movie.poster} alt="bara rxw7" />
      <h2>{props.movie.title}</h2>
    </div>
  );
};

export default MovieCard;
