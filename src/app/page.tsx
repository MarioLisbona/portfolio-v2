"use client";
import { Text } from "@chakra-ui/react";
import SectionContainer from "./components/SectionContainer";

export default function Home() {
  return (
    <SectionContainer>
      <Text textStyle={"heading"}>This is a heading</Text>
      <Text textStyle={"subheading"}>This is a subheading</Text>
      <Text textStyle={"context"}>This is context</Text>
    </SectionContainer>
  );
}
