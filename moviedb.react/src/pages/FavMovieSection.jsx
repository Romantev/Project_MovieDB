import { useState, useContext, useEffect } from "react";
import { FavoritesContext } from "../context/Context";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";

const FavMovieSection = () => {
  const { fav, setFav } = useContext(FavoritesContext);
  const [newFav, setnewFav] = useState([]);

  const checkFav = Array.from(new Set(fav.flatMap((elm) => elm)));

  useEffect(() => {
    setnewFav(checkFav);
  }, []);

  return (
    <>
      <Link to="/">Back</Link>
      <main className=".movies-section">
        {newFav.map((movie, index) => {
          return <Movie item={movie} key={index} />;
        })}
      </main>
    </>
  );
};

export default FavMovieSection;
