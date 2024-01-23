import React from "react";
import {  useNavigate } from "react-router-dom" 
import {Center, Flex, Box, Text, Button} from "@chakra-ui/react";
import {useState , useEffect} from "react"
import useDataMovies from "../hooks/useDataMovies";

export default function Home() {


useEffect(() =>{

}, [])

  const navigate = useNavigate()
  
    const outerBoxStyles = {
      boxSize: '400px',
      p: '30',    
      w: "900px",
      h:"250px"
    }

    const innerBoxStyles = {
      textAlign: 'center',
      boxSize: 'full',
      color: 'black',
      fontSize: '30px',
    }


  return (
<Box h="400px" w="100%" backgroundImage="url(https://picsum.photos/id/1068/200/300)"   > 
    <Flex flexWrap='wrap'  justifyContent='space-evenly'>
      <Box sx={outerBoxStyles}  >
        <Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='30%' >
            <Text>Titulo</Text>
          <Text fontSize='md'>Descripcion de la pelicula</Text>
          <Button colorScheme='cyan' variant="ghost" onClick={() => navigate("/detail")} >Ver más</Button>
        </Box>
      </Box>
    </Flex>


    </Box>
  );
}
