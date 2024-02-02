import { Center, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Center bg="black" h="100px" color="pink">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Movie App
      </Text>
    </Center>
  );
}
