import React from "react";
import Header from "../UI/Header";
import { Wrap, Flex, WrapItem, Center } from "@chakra-ui/react";
import ProjectCard from "../UI/ProjectCard";
import SectionContainer from "./SectionContainer";

const Projects = () => {
  return (
    <SectionContainer>
      <Header title="Projects" reverse />
      <Flex w={"100%"} p={"2rem"}>
        <Wrap spacing="50px">
          <WrapItem>
            <Center>
              <ProjectCard />
            </Center>
          </WrapItem>
          <WrapItem>
            <ProjectCard />
          </WrapItem>
          <WrapItem>
            <ProjectCard />
          </WrapItem>
          <WrapItem>
            <ProjectCard />
          </WrapItem>
        </Wrap>
      </Flex>
    </SectionContainer>
  );
};

export default Projects;
