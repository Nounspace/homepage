"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "@/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CacheProvider>
        <ChakraProvider theme={theme} resetCSS>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  );
};

export default Providers;
