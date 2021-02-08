import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./pagination";
import ListGroup from "./listGroup";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    // Array of objects we dont want to modify that object we want to clone it
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenresSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    console.log(genre);
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      movies: allMovies,
    } = this.state;
    if (count === 0) return <span>There are no movies</span>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            onItemSelect={this.handleGenresSelect}
            items={genres}
            selectedItem={selectedGenre}
          />
        </div>
        <div className='col'>
          <span>Showing {filtered.length} movies in the database</span>
          <MoviesTable
            movies={movies}
            onDelete={() => this.handleDelete()}
            onLike={() => this.handleLike()}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
