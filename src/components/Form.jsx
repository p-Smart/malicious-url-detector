import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ResultDisplay from "./ResultDisplay";
import axios from "axios";
import delay from "../utils/delay";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const initialData = {
    url: "",
    model: "",
  };
  const [data, setData] = useState(initialData);
  const [response, setResponse] = useState(null);
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const loadingMessages = [
        "Fetching pickle...",
        "Loading vectorizer...",
        "Applying SVM model...",
        "Generating predictions...",
        "Decoding prediction results...",
      ];
      let messageIndex = 0;
      let intervalId;
      const toastId = toast({
        title: loadingMessages[messageIndex],
        status: "loading",
        position: "top",
        duration: null,
        isClosable: false,
      });

      intervalId = setInterval(() => {
        messageIndex = messageIndex + 1;
        toast.update(toastId, {
          title: loadingMessages[messageIndex] || loadingMessages[4],
          status: "loading",
        });
      }, 1000);

      const { data: responseData } = await axios.post(
        "https://malicious-url-detector-backend.onrender.com/check-url",
        {
          url: data.url,
          model: data.model,
        }
      );

      if (!responseData?.success) {
        toast.close(toastId);
        throw new Error(responseData?.message);
      }

      setResponse(responseData.data);

      clearInterval(intervalId);
      toast.update(toastId, {
        title: "Prediction completed successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: err?.response?.data?.message || err.message,
        status: "error",
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  const modelMap = {
    svm: "Support Vector Machine (SVM)",
    knn: "K-Nearest Neighbors (KNN)",
    random_forest: "Random Forest (RF)",
    naive_bayes: "Naive Bayes (NB)",
    xgboost: "XGBoost",
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
              disabled={response}
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
              disabled={response}
              placeholder="Select a model"
              focusBorderColor="brand.400"
              value={data.model}
              onChange={(e) => setData({ ...data, model: e.target.value })}
              isRequired
            >
              <option value="svm">Support Vector Machine (SVM)</option>
              <option value="knn">K-Nearest Neighbors (KNN)</option>
              <option value="random_forest">Random Forest (RF)</option>
              <option value="naive_bayes">Naive Bayes (NB)</option>
              <option value="xgboost">XGBoost</option>
            </Select>
          </FormControl>
          <Button
            disabled={response}
            type="submit"
            colorScheme="brand"
            size="lg"
            isLoading={loading}
          >
            Detect URL
          </Button>
          {response ? (
            <Button mt="20px" ml="auto" onClick={() => setResponse(null)}>
              Reset
            </Button>
          ) : null}
        </VStack>
      </Box>

      {response ? (
        <ResultDisplay
          url={data.url}
          prediction={response?.prediction}
          model={modelMap[data.model]}
        />
      ) : null}
    </Stack>
  );
};

export default Form;
