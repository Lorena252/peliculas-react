import { Spinner ,Center,Text} from "@chakra-ui/react";

export default function Loading(){
    return(
        <>
        <Center h="1000px">
            <Spinner
             thickness='4px'
             speed='0.65s'
             emptyColor='gray.200'
             color='blue.500'
             size='xl'
            />

            <Text> Cargando...</Text>
        </Center>
        </>
    )
}