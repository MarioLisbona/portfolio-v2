"use client";

import { Flex, Text } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";

export default function Hero() {
  return (
    <SectionContainer>
      <Flex>
        <Text textStyle={"heading"}>Hi, I'm Mario.</Text>
      </Flex>
    </SectionContainer>
  );
}
