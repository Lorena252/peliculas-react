import React from "react";
import {useState , useEffect} from "react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
Flex,
Box,
Center
} from "@chakra-ui/react";

export default function Search() {
  return (
  <Center w="100%" h="100px">
 < Flex>
   <Box >
      <FormControl >
        <Center>
        <FormLabel>Busca tu pelicula</FormLabel>
        </Center>
        <Input type="text" w="500px"/>
      </FormControl>
    </Box>     
</Flex>
</Center>
  );
}
