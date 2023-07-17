import React from "react";
import Header from "../UI/Header";
import { Wrap, Flex, WrapItem, Center } from "@chakra-ui/react";
import ProjectCard from "../UI/ProjectCard";
import SectionContainer from "./SectionContainer";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <SectionContainer>
      <Header title="Projects" reverse />
      <Flex w={"100%"} p={"2rem"}>
        <Wrap spacing="50px">
          {projectsData.map((proj, idx) => (
            <WrapItem key={idx}>
              <Center>
                <ProjectCard
                  title={proj.title}
                  tech={proj.tech}
                  content={proj.content}
                />
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </SectionContainer>
  );
};

export default Projects;
