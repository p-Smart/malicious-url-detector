import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import Form from "../components/Form";
import HowItWorks from "../components/HowItWorks";
import Description from "../components/Description";

const Home = () => {
  return (
    <Box position="relative" minH="100vh" overflow="hidden" pb="50px">
      <Box
        bgColor="blackAlpha.900"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-1"
      >
        <video
          src="/assets/images/videos/neural_networks.mp4"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        ></video>
      </Box>

      <VStack
        spacing={8}
        align="center"
        maxW="1200px"
        mx="auto"
        zIndex={1}
        py={8}
        px={4}
      >
        <Stack
          pos="fixed"
          w="full"
          maxW="800px"
          color="whiteAlpha.900"
          bg="blackAlpha.800"
          borderRadius="md"
          boxShadow="lg"
          textAlign="center"
        >
          <Text fontSize="4xl" fontWeight="bold" textAlign="center">
            Malicious URL Detector
          </Text>
        </Stack>
        <Stack pt={{ base: "150px", sm: "100px" }} w="100%" gap="20px">
          <Description />
          <Form />
          <HowItWorks />
        </Stack>
      </VStack>
    </Box>
  );
};

export default Home;
