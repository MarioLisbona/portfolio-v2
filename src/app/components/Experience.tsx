"use client";
import React from "react";
import SectionContainer from "./SectionContainer";
import Header from "../UI/Header";
import { Flex, Box } from "@chakra-ui/react";
import ExperienceCard from "../UI/ExperienceCard";
import { experienceData } from "../constants/ExperienceData";

const Experience = () => {
  return (
    <Box id={"experience"} pt={"70px"} mt={"-70px"}>
      <SectionContainer>
        <Header title={"Experience"} />
        <Flex w={"100%"} direction={"column"}>
          {experienceData.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </Flex>
      </SectionContainer>
    </Box>
  );
};

export default Experience;
