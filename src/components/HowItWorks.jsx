import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <Box
      bg="whiteAlpha.900"
      borderRadius="md"
      boxShadow="lg"
      p={6}
      w="full"
      maxW="1000px"
      mx="auto"
    >
      <Text fontSize="2xl" fontWeight="bold" color="brand.500" mb={4}>
        How It Works
      </Text>

      <SimpleGrid columns={[1, 2]} spacing={4}>
        <Box>
          <Text fontSize="lg">1. Input a URL you wish to check.</Text>
        </Box>
        <Box>
          <Text fontSize="lg">
            2. Select a machine learning model for the detection.
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg">
            3. Our system processes the URL using the selected model.
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg">
            4. Get the detection result with accuracy details.
          </Text>
        </Box>
      </SimpleGrid>

      <Button colorScheme="purple" w="100%" mt="50px" as={Link} to="/howitworks">
        See Details
      </Button>
    </Box>
  );
};

export default HowItWorks;
