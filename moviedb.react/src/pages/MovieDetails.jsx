import "./MovieDetails.css";
import { useContext } from "react";
import Movies from "../data/data";
import { useParams, Link } from "react-router-dom";
import { FavoritesContext } from "../context/Context";

const MovieDetails = () => {
  const { fav, setFav } = useContext(FavoritesContext);
  const params = useParams();

  const movie = Movies.filter((elm) => elm.title === params.title);

  const addToFav = () => {
    const newFav = [...fav];
    newFav.push(movie[0]);
    setFav(newFav);
  };

  return (
    <>
      <main className="movie-details">
        <Link className="link-back" to="/">
          Back to all Movies
        </Link>
        <section className="movie-details-section">
          <h1>{movie[0].title}</h1>
          <h2>Director: {movie[0].director}</h2>
          <h2>Year: {movie[0].year}</h2>
          <h3>Rating: {movie[0].rate}</h3>
          <h3>Duration: {movie[0].duration}</h3>
          <button onClick={addToFav} className="button-link">
            ☆
          </button>
        </section>
      </main>
    </>
  );
};

export default MovieDetails;
