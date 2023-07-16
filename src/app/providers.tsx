"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../../theme";
import Fonts from "@/fonts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
