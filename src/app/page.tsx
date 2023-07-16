"use client";
import { Flex, Text } from "@chakra-ui/react";
import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <SectionContainer>
      <Hero />
      <About />
    </SectionContainer>
  );
}
