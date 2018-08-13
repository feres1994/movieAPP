import React from "react";

const Search = props => {
  return (
    <div>
      <input
        type="text"
        name="movie-querry"
        onChange={e => props.getF(e.target.value)}
      />
    </div>
  );
};

export default Search;
