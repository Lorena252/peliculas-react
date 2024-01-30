import React from "react";
import { Center, Text, Box, Flex, Wrap, Card } from "@chakra-ui/react";

export default function Favorites() {
  return (
    <>
      <Box>
        <Box>
          <Center h="100px">
            <Text fontSize="3xl">Favoritos</Text>
          </Center>
          <Center>
            <Box m="20px">
              <Flex>
                <Wrap></Wrap>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );
}
