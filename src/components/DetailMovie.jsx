import React from "react";
import {useState , useEffect} from "react"

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
  return (
    <Box
      height="600px"
      backgroundImage="url(https://hips.hearstapps.com/hmg-prod/images/6-en-la-sombra-2-1585813193.jpg) "
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
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Box h="400px">
              <Box backdropFilter="auto" backdropContrast="90%">
                <CardBody>
                  <Flex>
                    <Heading size="md" color="white">
                      Titulo de la pelicula
                    </Heading>
                    <Button colorScheme="teal" variant="link" ml="60px">
                      Ver trailer
                    </Button>
                  </Flex>

                  <Text py="10" color="white">
                    General
                  </Text>
                  <Text fontSize="md" fontWeight="5px">
                    Aca va toda la descripcion de la pelicula
                  </Text>
                </CardBody>

                <CardFooter>
                  <Text py="10" color="white">
                    {" "}
                    Generos{" "}
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
