import { Button, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HowItWorksDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack w="full" minH="100vh" bg="white">
      <Button
        as={Link}
        to="/"
        ml="auto"
        mr="50px"
        mt="20px"
        colorScheme="brand"
      >
        Go Back
      </Button>
      <iframe
        src="/assets/malicious_url_detection.html"
        title="Malicious URL Detector"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
      />
    </Stack>
  );
};

export default HowItWorksDetails;
