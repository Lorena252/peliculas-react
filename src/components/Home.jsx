import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, Box, Center, Heading, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useDataMovies from "../hooks/useDataMovies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const { options } = useDataMovies();

  const [recommendations, setRecommendatios] = useState([]);

  async function moviesHome() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/8/recommendations?language=en-US&page=1",
      options
    );
    const data = await response.json();
    setRecommendatios(data.results);
  }

  useEffect(() => {
    moviesHome();
  }, []);

  const navigate = useNavigate();

  return (
    <Carousel mb="50">
      
    </Carousel>
  );
}
