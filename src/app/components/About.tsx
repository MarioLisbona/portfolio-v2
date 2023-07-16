"use client";
import { Flex, Text, Card } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import FullStopIcon from "../UI/FullStopIcon";
import HorizontalLine from "../UI/HorizontalLine";

const About = () => {
  return (
    <SectionContainer>
      <Flex w={"100%"} direction={"column"}>
        <Flex w={"100%"} justify={"space-between"} align={"center"}>
          <Flex align={"flex-end"}>
            <Text textStyle={"subheading"}>About</Text>
            <FullStopIcon />
          </Flex>
          <HorizontalLine />
        </Flex>
        <Flex>
          <Flex></Flex>
          <Flex></Flex>
        </Flex>
        <Flex></Flex>
      </Flex>
    </SectionContainer>
  );
};

export default About;
