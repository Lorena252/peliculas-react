import React from "react";
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
import useDataMovies from "../hooks/useDataMovies";



export default function CardMovie() {
  
const navigate = useNavigate()
const {setInfo, oneMovie,info} = useDataMovies()

let {title, id} = useParams()
  return (
    <Box onClick={() => navigate(`/detail/:${id}`)}>
      <Box>
        <Flex>
          <Wrap>
            <Card maxW="sm" m="2px" mb="25px">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
              />

              <Stack spacing="1" h="55px">
                <Center>
                  <Heading as="h5" size="sm" pt="15px">
                    {info.title}
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
