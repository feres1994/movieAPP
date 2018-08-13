import React from "react";
import Header from "./Header";
import MoviesList from "./MoviesList";
import data from "./data";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: data,
      searchvalue: ""
    };
    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(value) {
    this.setState({
      searchvalue: value
    });
  }

  render() {
    let filtredmovies = [];
    filtredmovies = this.state.movies.filter(
      el =>
        el.title.toLowerCase().indexOf(this.state.searchvalue.toLowerCase()) !==
        -1
    );

    return (
      <div>
        <Header getF={this.setSearch} />
        <MoviesList data={filtredmovies} />
      </div>
    );
  }
}

export default App;
