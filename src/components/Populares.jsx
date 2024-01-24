import React from "react";
import { useParams } from "react-router-dom";
import { Center, Text, Box, Flex, Wrap } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CardMovie from "./CardMovie";
import useDataMovies from "../hooks/useDataMovies";

import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

export default function Populares() {
  const { allMovies, info } = useDataMovies();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 42445;

  useEffect(() => {
    allMovies("popular");
  }, []);

  return (
    <Box>
      <Center h="100px">
        <Text fontSize="3xl">Populares</Text>
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
