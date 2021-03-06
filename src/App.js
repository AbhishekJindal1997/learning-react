import Counters from "./components/counters";
import Movies from "./components/movies";
import React, { Component } from "react";
import Navbar from "./components/NavbarM";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/notFound";
import Home from "./components/home";
import MoviesDetails from "./components/moviesDetails";
import "./App.css";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    movies: getMovies(),
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax calls
    console.log("App - Mounted");
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    console.log("event handler called", counterId);
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // cloning state into counters array using spread operator
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    // cloning state into counters array using spread operator
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    console.log("App - Render");
    return (
      <React.Fragment>
        <Navbar />

        {/* <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main> */}
        <Switch>
          <Route
            path='/movies/:id'
            render={(props) => (
              <MoviesDetails movieid={this.state.movies._id} />
            )}
          />
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/NotFound' component={NotFound} />

          <Route path='/' exact component={Home} />
          <Redirect to='NotFound' />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
