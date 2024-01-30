
import {
  Text,
  Box,
  Icon,
  Card,
  Image,
  Flex,
  CardHeader,
  IconButton,
  Center,
  Spacer
 
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";


export default function HomeList({ dataRated, dataPopulares }) {


  const navigate = useNavigate()
  return (
    <Box >
  
           <Flex>
        <Card h="600px" w="40%" ml="40" mb="20" mt="15">
          <Box bg="black">
            <Center m="5">
              <Text fontSize="3xl" as="b"  bg="black" color="pink">
                Peliculas Populares
              </Text>
            </Center>
          </Box>
          <Box>
        
            {dataPopulares.map((moviePopular) => {
              return (
                 
                <Card key={moviePopular.id} mb="1">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Image
                             bgSize="cover"
                             bgPosition="center"
                          sx={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${moviePopular.backdrop_path})`,
                            borderRadius: "full",
                            boxSize: "50px",
                            objectFit: "cover",
                          }}
                        />
                        <Box>
                          <Text as='b' cursor="pointer" onClick={() => navigate(`/detail/${moviePopular.id}`)} >{moviePopular.title}</Text>
                        </Box>
                        <Spacer/>
                        <IconButton
                          isRound={true}
                          variant="solid"
                          colorScheme="teal"
                          aria-label="Done"
                          fontSize="20px"
                          icon={<CheckIcon /> }
                          onClick={() => navigate(`/detail/${moviePopular.id}`)}
                        />
                      </Flex>
                    </Flex>
                  </CardHeader>
                </Card>
              );
            })}

          </Box>
        </Card>
      
        <Card h="600px" w="40%" ml="10" mt="15">
          <Box bg="black">
            <Center m="5">
              <Text fontSize="3xl" as="b"  bg="black" color="pink">
                Peliculas Mejor Puntadas
              </Text>
            </Center>
          </Box>
          <Box>
            {dataRated.map((movieRated) => {
              return (
             
                <Card key={movieRated.id} mb="1">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Image
                         bgSize="cover"
                         bgPosition="center"
                          sx={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieRated.backdrop_path})`,
                            borderRadius: "full",
                            boxSize: "50px",
                            objectFit: "cover",
                          }}
                        />
                        <Box>
                          <Text as="b" cursor="pointer" onClick={() => navigate(`/detail/${movieRated.id}`)} >{movieRated.title}</Text>
                        </Box>
                        <Spacer/>
                        <IconButton
                          isRound={true}
                          variant="solid"
                          colorScheme="teal"
                          aria-label="Done"
                          fontSize="20px"
                          icon={<CheckIcon />}
                          onClick={() => navigate(`/detail/${movieRated.id}`)}
                        />
                      </Flex>
                    </Flex>
                  </CardHeader>
                </Card>
              );
            })}
          </Box>
        </Card>
      </Flex>

    </Box>
  );
}
