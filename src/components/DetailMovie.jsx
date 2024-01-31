import React from "react";
import { useEffect, useState } from "react";
import useDataMovies from "../hooks/useDataMovies";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
import {
  Text,
  Box,
  Card,
  CardBody,
  Heading,
  CardFooter,
  Flex,
} from "@chakra-ui/react";

export default function DetailMovie() {
  const { oneMovie, info, options } = useDataMovies();
  const [trailer, setTrailer] = useState("");

  let { id } = useParams();

  async function getVideo(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const data = await response.json();
    const keyVideo = data.results[0]?.key;
    setTrailer(keyVideo);
  }

  useEffect(() => {
    oneMovie(id);
    getVideo(id);
  }, []);

  return (
    <Box>
      {info?.title ? (
        <Box
          display="flex"
          justifyContent="center"
          height="1200px"
          filter="auto"
          brightness="80%"
          sx={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${info.backdrop_path})`,
            backgrounPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Card
            w="80%"
            mt="50px"
            backdropFilter="50"
            backdropContrast="80%"
            backgroundColor="transparent"
          >
            <Box
              backdropFilter="auto"
              backdropContrast="90%"
              backgroundColor="transparent"
            >
              <Flex>
                <Box
                  sx={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${info.poster_path})`,
                    backgrounPosition: "center",
                    backgroundSize: "cover",
                    width: "40%",
                    height: "900px",
                  }}
                />

                <Box width="30%" height="100%">
                  <Box backdropFilter="auto" backdropContrast="50%">
                    <CardBody>
                      <Flex>
                        <Heading size="md" color="white">
                          {info.title}
                        </Heading>
                        <Text pl="10px" color="white">
                          {info.release_date}
                        </Text>

                        {
                          <Link
                            to={`https://www.youtube.com/watch?v=${trailer}`}
                          >
                            <Text as="b" ml="15" color="white">
                              Ir al link
                            </Text>
                          </Link>
                        }
                      </Flex>

                      <Text py="10" color="white">
                        General
                      </Text>
                      <Text fontSize="md" fontWeight="5px" color="white">
                        {info.overview}
                      </Text>
                    </CardBody>
                    <Text ml="5" color="white">
                      Generos
                    </Text>
                    <CardFooter ml="5" color="white">
                      {
                        <ul>
                          {info.genres.map((movieGenre) => {
                            return (
                              <li key={movieGenre.name}>{movieGenre.name}</li>
                            );
                          })}
                        </ul>
                      }
                    </CardFooter>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Card>
        </Box>
      ) : (
        <Loading />
      )}
    </Box>
  );
}
