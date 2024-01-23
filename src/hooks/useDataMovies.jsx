import { useState } from "react";

function useDataMovies() {
  const apiKey = import.meta.env.VITE_SOME_KEY;

  const [info, setInfo] = useState([]);

  let options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  async function allMovies(categoryMovie) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${categoryMovie}?language=en-US`,
      options
    );
    const data = await response.json();
    setInfo(data.results);
    console.log(data.results);
  }

  async function oneMovie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const data = await response.json();
    setInfo(data);
    console.log(data);
  }

  return {
    allMovies,
    oneMovie,
    info,
  };
}

export default useDataMovies;
