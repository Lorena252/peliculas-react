import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, Box, Center, Heading, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useDataMovies from "../hooks/useDataMovies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
  import HomeList from "./HomeList";

export default function Home() {
  const { options, allMovies,info} = useDataMovies();

  const [recommendations, setRecommendatios] = useState([]);
const [rated, setRated] = useState([])


  async function moviesHome() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/8/recommendations?language=en-US&page=1",
      options
    );
    const data = await response.json();
    setRecommendatios(data.results);
  }
  async function topRated() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const data = await response.json();
    console.log(data.results)
    setRated(data.results);
  }


  useEffect(() => {
    moviesHome();
    topRated()
    allMovies("popular")
  }, []);

  const navigate = useNavigate();

  return (
    <Box>
    <Carousel mb="50">
    {recommendations.map((movie) => {
      return (
        <Box
          key={movie.id}
          sx={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            height: "600px",
            backgrounPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Center>
            <Box
              w="50%"
              mt="40"
              p="15"
              bg="white"
              backdropFilter="auto"
              backdropContrast="10%"
              backgroundColor="transparent"
            >
              <Heading as="h3" size="lg" color="black" mb="5">
                {movie.title}
              </Heading>
              <Text color="black">{movie.overview}</Text>
              <Button m="3" colorScheme='pink' variant='solid' onClick={() => navigate(`/detail/${movie.id}`)}>
                Ver detalle...
              </Button>
            </Box>
          </Center>
        </Box>
      );
    })}
  </Carousel>


<HomeList  dataPopulares={info} dataRated={rated} />

</Box>
  );
}
