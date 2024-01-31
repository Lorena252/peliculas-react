import React from "react";
import { useParams } from "react-router-dom";
import { Center, Text, Box, Flex, Wrap } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CardMovie from "./CardMovie";
import useDataMovies from "../hooks/useDataMovies";

import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

export default function Populares() {
  const { allMovies, info, currentPage, totalPagesPopular, setCurrentPage} = useDataMovies();



  useEffect(() => {
    allMovies("popular");

  }, [currentPage]);

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
                  dataMovie={movie}
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
            total={totalPagesPopular}
            onPageChange={setCurrentPage}
          />
        </Box>
      </Center>
    </Box>
  );
}
