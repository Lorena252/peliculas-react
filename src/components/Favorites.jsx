import React from "react";
import { Center, Text, Box, Flex, Wrap, Card } from "@chakra-ui/react";
import { FavoritesContext } from "../context/FavoritesContext";
import CardMovie from "./CardMovie";
import { useContext } from "react";
export default function Favorites() {

  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <Box>
        <Box>
          <Center h="100px">
            <Text fontSize="3xl">Favoritos</Text>
          </Center>
          <Center>
            <Box m="20px">
              <Flex>
                <Wrap>
                {favorites.map((movie) => {
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
          </Center>
        </Box>
      </Box>
    </>
  );
}
