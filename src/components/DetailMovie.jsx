import React from "react";
import {useState , useEffect} from "react"
import useDataMovies from "../hooks/useDataMovies";
import { useParams } from "react-router-dom";
import {
  Center,
  Text,
  Box,
  Card,
  Image,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Flex,
} from "@chakra-ui/react";


export default function DetailMovie() {

  const {setInfo, oneMovie,info} = useDataMovies()

  let params = useParams()

useEffect(() =>{
 oneMovie(83)

},[])

  return (
    <Box
      height="600px"
      backgroundImage= {setInfo.poster_path}
      filter="auto"
      brightness="80%"
    >
      <Center>
        <Flex>
          <Card
            direction={{ base: "column", sm: "row" }}
            pb="20px"
            w="80%"
            backgroundColor="transparent"
            pt="80px"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "50%", sm: "500px" }}
              src= {info.backdrop_path}
              alt={info.backdrop_path}
            />

            <Box h="400px">
              <Box backdropFilter="auto" backdropContrast="90%">
                <CardBody>
                  <Flex>
                    <Heading size="md" color="white">
                      {info.title}                
               <Text>    {info.release_date}</Text>
                    </Heading>
                    <Button colorScheme="teal" variant="link" ml="60px">
                      Ver trailer
                    </Button>
                  </Flex>

                  <Text py="10" color="white">
                    General
                  </Text>
                  <Text fontSize="md" fontWeight="5px">
                  {info.overview}
                  </Text>
                </CardBody>

                <CardFooter>
                  <Text py="10" color="white">
  
                    Generos
             
                  </Text>
                </CardFooter>
              </Box>
            </Box>
          </Card>
        </Flex>
      </Center>
    </Box>
  );
}
