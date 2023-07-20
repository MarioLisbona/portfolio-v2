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
} from "@chakra-ui/react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import SocialIcon from "./SocialIcon";
import CustomIcon from "./CustomIcon";
import Parser from "html-react-parser";
import { ProjectDataProps } from "../constants/projectsData";

const ProjectCard = ({ project }: { project: ProjectDataProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CustomOverlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(45deg)"
    />
  );
  return (
    <>
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
            <Button onClick={onOpen}>
              <Text color="tan" fontSize="2xl">
                Learn More
              </Text>
            </Button>
          </Stack>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <CustomOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textStyle={"heading"}>{project.title}</Text>
            <Text textStyle={"context"}>{project.content}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
