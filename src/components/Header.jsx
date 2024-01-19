import React from "react";
import { Button, Box} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom" 
export default function Header() {

const navigate = useNavigate()

  return (
    <Box h='100%' bg="black">
      <Button onClick={() => navigate("/")} m="2" colorScheme='teal' variant="ghost">
        Home
      </Button>
      <Button onClick={() => navigate("/lanzamientos")} m="2"  colorScheme='teal' variant="ghost">
        Ultimos lanzamientos
      </Button>
      <Button onClick={() => navigate("/populares")} m="2" colorScheme='teal' variant="ghost">
        Populares
      </Button>
      <Button onClick={() => navigate("/buscar")} m="2" colorScheme='teal' variant="ghost">
        Buscar
      </Button>
    </Box>
  );
}
