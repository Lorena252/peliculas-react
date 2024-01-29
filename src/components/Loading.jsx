import { Spinner ,Center} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useDataMovies from "../hooks/useDataMovies";

export default function Loading(){
console.log("loading")
    return(
        <>
        <Center h="1000px">
            <Spinner
             thickness='4px'
             speed='0.65s'
             emptyColor='gray.200'
             color='blue.500'
             size='xl'
            />
        </Center>
        </>
    )
}