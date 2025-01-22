import { Box, Text } from "@chakra-ui/react";

const ResultDisplay = ({ url }) => {
  return (
    <Box
      bg="whiteAlpha.800"
      borderRadius="md"
      boxShadow="lg"
      p={6}
      w="full"
      maxW="800px"
      mx="auto"
      textAlign="center"
    >
      <Text fontSize="lg" fontWeight="bold">
        The URL{" "}
        <Text as="span" color="brand.500">
          {url || "https://example.com"}
        </Text>{" "}
        is detected to be a{" "}
        <Text as="span" color="green.500">
          benign URL
        </Text>
        (80% accuracy).
      </Text>
    </Box>
  );
};

export default ResultDisplay;
