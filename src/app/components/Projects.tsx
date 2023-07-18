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
            {projectsData.map((proj, idx) => (
              <WrapItem key={idx}>
                <ProjectCard
                  thumbnail={proj.thumbnail}
                  title={proj.title}
                  tech={proj.tech}
                  content={`${proj.content.substring(0, 150)}....`}
                  repo={proj.repo}
                  site={proj.site}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </SectionContainer>
    </Box>
  );
};

export default Projects;
