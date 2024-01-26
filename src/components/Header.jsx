import React from "react";
import { Button, Box,Icon} from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom" 
  import { PiPopcornBold } from "react-icons/pi";


export default function Header(){
const navigate = useNavigate()

  return (
    <Box h='100px' bg="black" >
          <Icon boxSize={14} color="pink" pt="2" ml="2" as={PiPopcornBold} />        
      <Button onClick={() => navigate("/")} m="2" h="90px" w="150px" size='lg' colorScheme='pink' variant='ghost'>
        Home
      </Button>
      <Button onClick={() => navigate("/lanzamientos")} m="2" size='lg'  h="90px" colorScheme='pink' variant='ghost'>
        Ultimos lanzamientos
      </Button>
      <Button onClick={() => navigate("/populares")} m="2" w="150px"   size='lg' h="90px" colorScheme='pink' variant='ghost'>
        Populares
      </Button>
      <Button onClick={() => navigate("/buscar")} m="2" w="150px"  size='lg' h="90px" colorScheme='pink' variant='ghost'  >
        Buscar
      </Button>
    </Box>
  );
}
