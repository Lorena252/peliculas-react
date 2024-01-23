import React from "react";
import { useParams } from "react-router-dom"
import { Center,Text,Box} from "@chakra-ui/react";
import {useEffect, useState} from "react"
import CardMovie from "./CardMovie";

export default function Lanzamientos() {

const params = useParams()


  return (

<Box>
     <Center h="100px">
        <Text fontSize="3xl">Ultimos Lanzamientos</Text>
      </Center>

   <CardMovie/>
</Box>





  )
}
