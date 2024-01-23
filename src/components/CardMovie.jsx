
import {  useNavigate, useParams} from "react-router-dom" 
import {
  Center,
  Text,
  Flex,
  Wrap,
  Card,
  Image,
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
    <Box onClick={() => navigate(`/detail/${id}`)}>
      <Box>
        <Flex>
          <Wrap>
            <Card maxW="sm" m="2px" mb="25px">
              <Image
                src={img}
                // alt=""
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
