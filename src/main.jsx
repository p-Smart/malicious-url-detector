import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#f5e9ff",
      100: "#dcc7ff",
      200: "#c3a4ff",
      300: "#aa82ff",
      400: "#905fff",
      500: "#7746e6",
      600: "#5e36b4",
      700: "#452582",
      800: "#2c154f",
      900: "#150827",
    },
  },
  fonts: {
    heading: "'Roboto Mono', monospace",
    body: "'Roboto Mono', monospace",
  },
  components: {
    Button: defineStyleConfig({
      baseStyle: {
        transition: "all 0.2s ease-in-out",
        _hover: {
          filter: "brightness(85%)",
        },
        _active: {
          transform: "scale(0.94)",
        },
        _loading: {
          _hover: {
            bgColor: "brand.200",
          },
        },
      },
    }),
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      
    </ChakraProvider>
  </StrictMode>
);
