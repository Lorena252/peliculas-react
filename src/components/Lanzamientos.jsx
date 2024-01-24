import React from "react";
import { Center, Text, Box, Flex, Wrap } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardMovie from "./CardMovie";
import useDataMovies from "../hooks/useDataMovies";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

export default function Lanzamientos() {

  
  const { allMovies, info } = useDataMovies();
  useEffect(() => {
    allMovies("now_playing");
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 149;

  return (
    <Box>
      <Center h="100px">
        <Text fontSize="3xl">Lanzamientos</Text>
      </Center>
      <Center>
        <Box ml="20px">
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
      </Center>

      <Center>
        <Box w="25%" mb="20px">
          <ResponsivePagination
            bg="pink"
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </Box>
      </Center>
    </Box>
  );
}
