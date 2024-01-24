
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
} from "@chakra-ui/react";
import {ViewIcon } from '@chakra-ui/icons'


export default function CardMovie({id,title,img}) {

const navigate = useNavigate()

  return (
    <Box onClick={() => navigate(`/detail/${id}`)} >
      <Box  w="100%">
        <Flex>
          <Wrap>
            <Card w="280px" m="2px" mb="25px" >
              <Box
                sx={{                
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,           
                 height:"500px",
                   width:"100%"
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
   
  );
}
