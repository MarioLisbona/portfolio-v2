import React from "react";
import Header from "../UI/Header";
import { Wrap, Flex, WrapItem, Center } from "@chakra-ui/react";
import ProjectCard from "../UI/ProjectCard";
import SectionContainer from "./SectionContainer";
import { projectsData } from "../constants/projectsData";

const Projects = () => {
  return (
    <SectionContainer>
      <Header title="Projects" reverse />
      <Flex w={"100%"} px={"2rem"}>
        <Wrap spacing="50px">
          {projectsData.map((proj, idx) => (
            <WrapItem key={idx}>
              <Center>
                <ProjectCard
                  title={proj.title}
                  tech={proj.tech}
                  content={`${proj.content.substring(0, 150)}....`}
                  repo={proj.repo}
                  site={proj.site}
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
