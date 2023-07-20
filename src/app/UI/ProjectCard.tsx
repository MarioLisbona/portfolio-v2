import {
  CardBody,
  // Image,
  Stack,
  Text,
  Card,
  Flex,
  Link,
  Icon,
  Button,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import SocialIcon from "./SocialIcon";
import CustomIcon from "./CustomIcon";
import Parser from "html-react-parser";
import { ProjectDataProps } from "../constants/projectsData";

const ProjectCard = ({ project }: { project: ProjectDataProps }) => {
  return (
    <Card
      maxW="lg"
      bg={useColorModeValue("ivory", "whiteAlpha.50")}
      boxShadow={"xl"}
    >
      <CardBody>
        <Flex justify="center">
          <Image
            src={project.thumbnail}
            height={300}
            width={600}
            alt={`Screenshot of ${project.title} project`}
          />
        </Flex>
        <Stack mt="6" spacing="3">
          <Flex w={"100%"} align={"center"} justify={"space-between"}>
            <Text textStyle={"extraSmallHeadingBold"}>{project.title}</Text>
            <Flex>
              {project.repo && (
                <SocialIcon href={project.repo!}>
                  <CustomIcon
                    color={"sage"}
                    icon={SiGithub}
                    me={"1rem"}
                    label={"Project Github"}
                  />
                </SocialIcon>
              )}
              {project.site && (
                <SocialIcon href={project.site!}>
                  <CustomIcon
                    color={"sage"}
                    icon={LuExternalLink}
                    me={"1rem"}
                    label={"Project Live Site"}
                  />
                </SocialIcon>
              )}
            </Flex>
          </Flex>
          <Flex w={"100%"} justify={"flex-start"}>
            <Text textStyle={"smBold"} color={"tan"}>
              {project.tech}
            </Text>
          </Flex>
          <Text textStyle={"context"}>
            {Parser(`${project.content.substring(0, 100)}...`)}
          </Text>
          <Text color="tan" fontSize="2xl">
            Learn More
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
