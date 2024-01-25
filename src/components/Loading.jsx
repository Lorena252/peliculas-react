import { Spinner ,Center} from "@chakra-ui/react";
import React from "react";

export default function Loading(){


    return(
        <>
        <Center h="1000px" >
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