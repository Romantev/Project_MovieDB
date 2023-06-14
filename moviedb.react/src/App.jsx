import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesSection from "./pages/MoviesSection";
import MovieDetails from "./pages/MovieDetails";
import FavMovieSection from "./pages/FavMovieSection";
import { FavoritesContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [fav, setFav] = useState([]);

  return (
    <>
      <FavoritesContext.Provider value={{ fav, setFav }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesSection />} />
            <Route path="/moviedetails/:title" element={<MovieDetails />} />
            <Route path="/favorites" element={<FavMovieSection />} />
          </Routes>
        </BrowserRouter>
      </FavoritesContext.Provider>
    </>
  );
}

export default App;
