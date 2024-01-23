import React from "react";
import { useParams } from "react-router-dom"
import { Center,Text,Box} from "@chakra-ui/react";
import {useEffect, useState} from "react"
import CardMovie from "./CardMovie";
import useDataMovies from "../hooks/useDataMovies";




export default function Lanzamientos() {

const params = useParams()
const { allMovies,info} = useDataMovies()
useEffect(() =>{
allMovies("now_playing")

}, [])


  return (
<Box>
     <Center h="100px">
        <Text fontSize="3xl">Lanzamientos</Text>
      </Center>
      {info.map((movie) => {
        return (
          <CardMovie key={movie.id} />
        );
      })}
</Box>
  )
}
