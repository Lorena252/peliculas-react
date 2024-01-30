import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function useDataMovies() {
  const apiKey = import.meta.env.VITE_SOME_KEY;

  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPagesPopular =  42445

  const totalPagesLanzamiento =  149

  let options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  async function allMovies(categoryMovie) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${categoryMovie}?language=en-US&page=1${currentPage}`,
      options
    );
    const data = await response.json();
    setInfo(data.results);
  
  }

  async function oneMovie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const data = await response.json();
    console.log(data)
  setInfo(data);
  }


  return {
    options,
    allMovies,
    oneMovie,
    info,
    currentPage,
    setCurrentPage,
    totalPagesPopular,
      totalPagesLanzamiento,

   
  };
}

export default useDataMovies;
