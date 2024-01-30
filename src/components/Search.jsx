import React from "react";
import { useState, useEffect } from "react";
import {
  FormControl,
  Box,
  Input,
  Flex,
  Wrap,
  Center,
  Text,
} from "@chakra-ui/react";
import useDataMovies from "../hooks/useDataMovies";
import CardMovie from "./CardMovie";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [value, setValue] = useState("");
  const [coincidences, setCoincidences] = useState([]);
  const { options } = useDataMovies();

const navigate = useNavigate()

  const handleChange = (event) => {
    setValue(event.target.value);
   
  };

  async function searchMovie(value) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}`,
      options
    );
    const data = await response.json();
    setCoincidences(data.results);
  }

  useEffect(() => {
    searchMovie(value);
    if (value !== "") {
           navigate(`/buscar/${value}`)
    } else {
      navigate("/buscar")
    }

  }, [value]);

  return (
    <Box>
      <Flex>
        <Center w="100%" h="100px">
          <Wrap>
            <Box>
              <Center>
                <Text fontSize="md" as="b">
                  Busca tu pelicula
                </Text>
              </Center>

              <FormControl>
                <Center>
                  <Input
                    placeholder="Nombre de la pelicula"
                    size="lg"
                    value={value}
                    onChange={handleChange}
                  />
                </Center>
              </FormControl>
            </Box>
          </Wrap>
        </Center>
      </Flex>

      <Box bg="white">
        <Center>
          <Box ml="20px">
            <Flex>
              <Wrap>
                {coincidences.map((movie) => {
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
      </Box>
    </Box>
  );
}
