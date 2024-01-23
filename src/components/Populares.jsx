import React from "react";
import { Link , useParams} from "react-router-dom"
import { Center,Text, Box} from "@chakra-ui/react";
import {useState , useEffect} from "react"
import CardMovie from "./CardMovie";


export default function Populares() {

const params = useParams()

  return (
<Box>
     <Center h="100px">
        <Text fontSize="3xl">Populares</Text>
      </Center>

   <CardMovie/>
</Box>



















  );
}
