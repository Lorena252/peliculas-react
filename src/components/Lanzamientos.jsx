import React from "react";
import { useParams } from "react-router-dom";
import { Center, Text, Box, Flex, Wrap } from "@chakra-ui/react";
import { useEffect } from "react";
import CardMovie from "./CardMovie";
import useDataMovies from "../hooks/useDataMovies";

export default function Lanzamientos() {
  const { allMovies, info } = useDataMovies();
  useEffect(() => {
    allMovies("now_playing");
  }, []);

  return (
    <Box>
      <Center h="100px">
        <Text fontSize="3xl">Lanzamientos</Text>
      </Center>

      <Box>
        <Flex>
          <Wrap>
            {info.map((movie) => {
              return (
                <CardMovie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  img={movie.backdrop_path}
                />
              );
            })}
          </Wrap>
        </Flex>
      </Box>
    </Box>
  );
}
