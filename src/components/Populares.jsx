import React from "react";
import { useParams} from "react-router-dom"
import { Center,Text, Box} from "@chakra-ui/react";
import {useState , useEffect} from "react"
import CardMovie from "./CardMovie";
import useDataMovies from "../hooks/useDataMovies";

export default function Populares() {

const params = useParams()

const { allMovies, info} = useDataMovies()

useEffect(() =>{

allMovies("popular")

}, [])



  return (
<Box>
     <Center h="100px">
        <Text fontSize="3xl">Populares</Text>
      </Center>
      {info.map((movie) => {
        return (
          <CardMovie key={movie.id}  />
        );
      })}
</Box>


  )
}
