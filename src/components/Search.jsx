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
Center,
Text
} from "@chakra-ui/react";


export default function Search() {

  const [value, setValue] = useState('')
  const handleChange = (event) => setValue(event.target.value)


useEffect(() =>{
console.log(value)
}, [value])

  return (
  <Center w="100%" h="100px">
 < Flex>
   <Box >
      <FormControl >
        <Center>
        <Input
        value={value}
        onChange={handleChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
        {/* <FormLabel>Busca tu pelicula</FormLabel>
        <Input placeholder='Basic usage' /> */}
        </Center>
        {/* <Input type="text" w="500px"/> */}
      </FormControl>
    </Box>     
</Flex>
</Center>
  );
}
