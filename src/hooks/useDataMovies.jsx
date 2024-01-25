import { useState } from "react";
import Loading from "../components/Loading";

function useDataMovies() {
  const apiKey = import.meta.env.VITE_SOME_KEY;

  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPagesPopular =  42445

  const totalPagesLanzamiento =  149

const [oneVideoMovie, setOneVideo] = useState([])

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
  setInfo(data);
  console.log(data)
  }

//obetener la key del video//
async function oneVideo(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  );
  let data = await response.json();
  const keyVideo = data.results
    console.log(keyVideo)
setOneVideo(keyVideo);

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
      oneVideoMovie,
      oneVideo,
      
  };
}

export default useDataMovies;
