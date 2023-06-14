import "./MovieSection.css";
import moviesData from "../data/data";
import Movie from "../components/Movie";
import { useState } from "react";
import { Link } from "react-router-dom";

const MoviesSection = () => {
  const [sortedMovies, setSortedMovies] = useState([...moviesData]);
  const [searchMovies, setSearchMovies] = useState([]);

  const sortByYearOld = () => {
    const sortedData = [...sortedMovies];
    sortedData.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    setSortedMovies(sortedData);
  };

  const sortByYearNew = () => {
    const sortedData = [...sortedMovies];
    sortedData.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    setSortedMovies(sortedData);
  };

  const sortByBestRate = () => {
    const sortedData = [...sortedMovies];
    sortedData.sort((a, b) => b.rate - a.rate);
    setSortedMovies(sortedData);
  };

  const sortByWorstRate = () => {
    const sortedData = [...sortedMovies];
    sortedData.sort((a, b) => a.rate - b.rate);
    setSortedMovies(sortedData);
  };

  const sortByAZ = () => {
    const sortedData = [...sortedMovies];
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
    setSortedMovies(sortedData);
  };

  const sortByZA = () => {
    const sortedData = [...sortedMovies];
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
    setSortedMovies(sortedData);
  };

  const searchForTitle = (event) => {
    const searchInput = event.target.value;
    const searchMovies = sortedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchMovies(searchMovies);
  };

  return (
    <>
      <header>
        <nav>
          <input
            type="text"
            placeholder="Search for Title"
            onChange={searchForTitle}
          />
          <button className="button-nav" onClick={sortByYearOld}>
            Sort by Year ↓
          </button>
          <button className="button-nav" onClick={sortByYearNew}>
            Sort by Year ↑
          </button>
          <button className="button-nav" onClick={sortByBestRate}>
            Best Rate
          </button>
          <button className="button-nav" onClick={sortByWorstRate}>
            Worst Rate
          </button>
          <button className="button-nav" onClick={sortByAZ}>
            A-Z
          </button>
          <button className="button-nav" onClick={sortByZA}>
            Z-A
          </button>
          <Link className="link-favs" to="/favorites">
            ☆
          </Link>
        </nav>
      </header>
      <main className="movies-section">
        {searchMovies.length > 0
          ? searchMovies.map((movie, index) => (
              <Movie item={movie} key={index} />
            ))
          : sortedMovies.map((movie, index) => (
              <Movie item={movie} key={index} />
            ))}
      </main>
    </>
  );
};

export default MoviesSection;
