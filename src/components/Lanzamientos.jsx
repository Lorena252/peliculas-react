import React from "react";
import { Center, Text, Box, Flex, Wrap,Icon} from "@chakra-ui/react";
import { useEffect } from "react";
import CardMovie from "./CardMovie";
import useDataMovies from "../hooks/useDataMovies";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { HiChevronDoubleRight, HiOutlineChevronDoubleLeft} from "react-icons/hi";


export default function Lanzamientos() {
  const totalPagesLanzamiento = 149;
  const {
    allMovies,
    info,
    currentPage,
    setCurrentPage,
  } = useDataMovies();

  useEffect(() => {
    allMovies("now_playing");
      
  }, [currentPage]);

  return (
    <Box p="5">
      <Box>
        <Center h="100px">
          <Text fontSize="3xl">Lanzamientos</Text>
        </Center>
        <Center>
          <Box pl="5px">
            <Flex>
              <Wrap>
                {info.map((movie) => {
                  return (
                    <CardMovie
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      img={movie.backdrop_path}
                      dataMovie={movie}
                    />
                  );
                })}
              </Wrap>
            </Flex>
          </Box>
        </Center>
        <Center>
          <Box w="25%" mb="20px">
            <Flex>
          <Icon onClick={() => {
            if(currentPage > 1){
              setCurrentPage( currentPage - 20)
            }
          }
          } as={HiOutlineChevronDoubleLeft} mr="6px" mt="12px" color="blue"/>
            <ResponsivePagination
              current={currentPage}
              total={totalPagesLanzamiento}
              onPageChange={setCurrentPage}              
            />
            <Icon onClick={() => setCurrentPage(currentPage + 20)} as={HiChevronDoubleRight} ml="6px" mt="12px" color="blue"/>
            </Flex>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
