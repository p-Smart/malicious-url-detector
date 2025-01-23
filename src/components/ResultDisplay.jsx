import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const ResultDisplay = ({ url, prediction, model }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ref.current]);

  return (
    <Box
      ref={ref}
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
          {url}
        </Text>{" "}
        is detected to be a{" "}
        <Text
          as="span"
          color={prediction === "benign" ? "green.500" : "red.500"}
        >
          {prediction} URL{" "}
        </Text>
        using the {model} model.
      </Text>
    </Box>
  );
};

export default ResultDisplay;
