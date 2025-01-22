import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import delay from "../utils/delay";
import ResultDisplay from "./ResultDisplay";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const initialData = {
    url: "",
    model: "",
  };
  const [data, setData] = useState(initialData);
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await delay(2000);
      setResponse("A response");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack gap="20px">
      <Box
        bg="whiteAlpha.900"
        borderRadius="md"
        boxShadow="lg"
        p={6}
        w="full"
        maxW="600px"
        mx="auto"
      >
        <VStack
          spacing={4}
          align="stretch"
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FormControl>
            <FormLabel>URL</FormLabel>
            <Input
              type="url"
              placeholder="Enter the URL to check"
              focusBorderColor="brand.400"
              value={data.url}
              onChange={(e) => setData({ ...data, url: e.target.value })}
              isRequired
            />
          </FormControl>
          <FormControl>
            <FormLabel>Model to Use</FormLabel>
            <Select
              placeholder="Select a model"
              focusBorderColor="brand.400"
              value={data.model}
              onChange={(e) => setData({ ...data, model: e.target.value })}
              isRequired
            >
              <option value="svm">Support Vector Machine (SVM)</option>
              <option value="rf">Random Forest (RF)</option>
              <option value="dt">Decision Tree (DT)</option>
              <option value="nb">Naive Bayes (NB)</option>
              <option value="nn">Neural Network (NN)</option>
            </Select>
          </FormControl>
          <Button
            type="submit"
            colorScheme="brand"
            size="lg"
            isLoading={loading}
          >
            Detect URL
          </Button>
        </VStack>
      </Box>

      {response ? <ResultDisplay url={data.url} /> : null}
    </Stack>
  );
};

export default Form;
