import { useContext } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/Context";

const Movie = (props) => {
  const { fav, setFav } = useContext(FavoritesContext);

  const addToFav = () => {
    const newFav = [...fav];
    newFav.push(props.item);
    setFav(newFav);
  };

  return (
    <article key={props.index} className="movies-article">
      <Link className="link" to={`/moviedetails/${props.item.title}`}>
        <h3 className="rating">{props.item.rate}</h3>
        <h2>{props.item.title}</h2>
        <h3 className="year">{props.item.year}</h3>
        <h3 className="director">Director: {props.item.director}</h3>
        <h3 className="duration">{props.item.duration}</h3>
        <div className="genre">
          {props.item.genre.map((genre, index) => {
            return <p key={index}>{genre}</p>;
          })}
        </div>
      </Link>
      <button onClick={addToFav} className="button-link">
        ☆
      </button>
    </article>
  );
};

export default Movie;
