import { createContext } from "react";
import { useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavs = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const delFavs = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const isFavs = (id) => {
    return favorites.some((movie) => movie.id === id);
  };

  const data = {
    favorites,
    addFavs,
    delFavs,
    isFavs,
  };

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
