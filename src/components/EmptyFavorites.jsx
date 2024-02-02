import { Center, Text, Box } from "@chakra-ui/react";

export default function EmptyFavorites() {
  return (
    <>
      <Box>
        <Center h="470px">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Aún no hay favoritos para visualizar
          </Text>
        </Center>
      </Box>
    </>
  );
}
