import React from "react";
import SectionContainer from "./SectionContainer";
import Header from "../UI/Header";
import { Flex } from "@chakra-ui/react";
import ExperienceCard from "../UI/ExperienceCard";

const Experience = () => {
  return (
    <SectionContainer>
      <Header title={"Experience"} />
      <Flex w={"100%"} direction={"column"}>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </Flex>
    </SectionContainer>
  );
};

export default Experience;
