"use client";
import { Flex, Text } from "@chakra-ui/react";
import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <SectionContainer>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </SectionContainer>
  );
}
