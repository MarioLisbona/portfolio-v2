import React from "react";
import Header from "../UI/Header";
import { Wrap, Flex, WrapItem, Center, Box } from "@chakra-ui/react";
import ProjectCard from "../UI/ProjectCard";
import SectionContainer from "./SectionContainer";
import { projectsData } from "../constants/projectsData";

const Projects = () => {
  return (
    <Box id={"projects"} pt={"70px"} mt={"-70px"}>
      <SectionContainer>
        <Header title="Projects" reverse />
        <Flex w={"100%"}>
          <Wrap spacing={{ base: "20px", xl: "50px" }} justify={"center"}>
            {projectsData.map((project, idx) => (
              <WrapItem key={idx}>
                <ProjectCard project={project} />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </SectionContainer>
    </Box>
  );
};

export default Projects;
