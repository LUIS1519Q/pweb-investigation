import { ChakraProvider, Box, Heading, Text, Button, defaultSystem } from "@chakra-ui/react";

function Tarjeta() {
  return (
    <Box bg="white" rounded="xl" shadow="md" p={8}>
      <Heading color="blue.600">Hola Mundo</Heading>
      <Text color="gray.500" mt={2}>
        Mi primera tarjeta con Chakra UI
      </Text>
      <Button colorScheme="blue" mt={4}>
        Click aquí
      </Button>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        bg="gray.100"
      >
        <Tarjeta />
      </Box>
    </ChakraProvider>
  );
}

export default App;