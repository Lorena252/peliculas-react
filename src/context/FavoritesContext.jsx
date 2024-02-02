import { createContext } from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const [favorites, setFavorites] = useState(
    getLocalStorage("favsMovies") || []
  );

  const addFavs = (movie) => {
    setFavorites([...favorites, movie]);
    setLocalStorage("favsMovies", [...favorites, movie]);
  };

  const delFavs = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
    setLocalStorage(favorites.filter((movie) => movie.id !== id));
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
