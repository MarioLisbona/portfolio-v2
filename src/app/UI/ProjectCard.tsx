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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  CardHeader,
  CardFooter,
  Heading,
  Image,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import SocialIcon from "./SocialIcon";
import CustomIcon from "./CustomIcon";
import Parser from "html-react-parser";
import { ProjectDataProps } from "../constants/projectsData";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }: { project: ProjectDataProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex direction={"column"}>
        <Card
          maxW="lg"
          bg={useColorModeValue("ivory", "whiteAlpha.50")}
          boxShadow={"xl"}
          borderRadius={"1rem"}
        >
          <Link onClick={onOpen}>
            <CardBody paddingBottom={0}>
              <Image
                src={project.thumbnail}
                width={600}
                alt={`Screenshot of ${project.title} project`}
              />
            </CardBody>
          </Link>
        </Card>
        <Card
          variant={"unstyled"}
          maxW="lg"
          bg={useColorModeValue("white", "gray.900")}
        >
          <CardBody>
            <Stack mt="6" spacing="3">
              <Flex w={"100%"} align={"center"} justify={"space-between"}>
                <Text textStyle={"extraSmallHeadingBold"}>{project.title}</Text>
                <Flex>
                  {project.repo && (
                    <SocialIcon href={project.repo!}>
                      <CustomIcon
                        color={"sage"}
                        icon={SiGithub}
                        me={project.site ? "1rem" : "0rem"}
                        label={"Project Github"}
                      />
                    </SocialIcon>
                  )}
                  {project.site && (
                    <SocialIcon href={project.site!}>
                      <CustomIcon
                        color={"sage"}
                        icon={LuExternalLink}
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
                {Parser(`${project.content.substring(0, 75)}...`)}
              </Text>
              <Flex justify={"flex-start"}>
                <Button variant={"linkBtn"} onClick={onOpen}>
                  <Text textStyle={"contextBold"} color="tan">
                    Learn More
                  </Text>
                </Button>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
    </>
  );
};

export default ProjectCard;
