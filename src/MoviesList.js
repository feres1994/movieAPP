import React from "react";
import MovieCard from "./MovieCard";
class MoviesList extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="movie-list">
        {this.props.data.map(el => <MovieCard movie={el} />)}
      </div>
    );
  }
}

export default MoviesList;
