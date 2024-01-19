import { Center, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

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
