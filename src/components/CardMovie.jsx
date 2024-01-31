
import {  useNavigate} from "react-router-dom" 
import {
  Center,
  Text,
  Flex,
  Wrap,
  Card,
  Heading,
  Stack,
  Divider,
  CardFooter,
  Box,
Icon
} from "@chakra-ui/react";

import {ViewIcon} from '@chakra-ui/icons'
import {FavoritesContext} from "../context/FavoritesContext"
import { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";



export default function CardMovie({id,title,img}) {

 const {addFavs, delFavs,isFavs} = useContext(FavoritesContext)

 const navigate = useNavigate()

  return (
  <>

<Box>

    <Box onClick={() => navigate(`/detail/${id}`)}>
      <Box  w="100%">
        <Flex>
          <Wrap>
            <Card w="280px" m="2px" br="red" >
              <Box
              h="500px"
              bgSize="cover"
             bgPosition="center"
              width="100%"
                sx={{                
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,           
                  maxW:'md'
                }}           
              />
      
              <Stack spacing="1" h="55px">
                <Center>
                  <Heading as="h5" size="sm" pt="15px">
                   <Text >{title}</Text>   
                  </Heading>
                </Center>
              </Stack>
              <Divider />
              <Center>
                <CardFooter>
                  <ViewIcon />
                </CardFooter>
               
              </Center>
            </Card>
          </Wrap>
        </Flex>
      </Box>
    </Box>


 <Box mb="15px" >
  <Card  h="35px">
  <Center>
     <Icon mt="10px" as={FaStar} color="yelow"  onClick={addFavs}/>
  <Icon mt="10px" as={FaRegStar} onClick={delFavs}  />
 
  </Center>
    </Card>
  </Box>

  

</Box>

   </>
  );
}
