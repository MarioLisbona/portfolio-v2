import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Stack,
  Flex,
  Card,
  CardBody,
  CardFooter,
  useDisclosure,
  Image,
  Icon,
  Link,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import Parser from "html-react-parser";
import { ProjectDataProps } from "../constants/projectsData";
import CustomIcon from "./CustomIcon";
import SocialIcon from "./SocialIcon";
// import Image from "next/image";
const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDataProps;
}) => {
  const CustomOverlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(45deg)"
    />
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <CustomOverlay />
      <ModalContent borderRadius={"1rem"} minWidth="fit-content">
        <Image
          borderTopRadius={"1rem"}
          src={project.thumbnail}
          width={900}
          alt={`Screenshot of ${project.title} project`}
        />
        <Flex
          direction={"column"}
          align={"flex-start"}
          bg={"coolGray"}
          p={"2rem"}
          maxW={"900px"}
        >
          <Text color={"white"} textStyle={"heading"} mb={"1rem"}>
            {project.title}
          </Text>
          <Text color={"white"} textStyle={"smBold"} mb={"1rem"}>
            {project.tech}
          </Text>
          <Text color={"white"} textStyle={"context"} mb={"1rem"}>
            {Parser(project.content)}
          </Text>
          <Text mb={"1rem"}>Project Links</Text>
          <Flex>
            <Flex me={"1rem"} align={"center"}>
              {project.repo && (
                <Link href={project.repo!}>
                  <Button variant={"linkBtn"}>
                    <CustomIcon
                      color={"black"}
                      icon={SiGithub}
                      me={"0.5rem"}
                      label={"Project Github"}
                    />
                    <Text color={"black"} textStyle={"smBold"}>
                      source code
                    </Text>
                  </Button>
                </Link>
              )}
            </Flex>
            <Flex align={"center"}>
              {project.site && (
                <Link href={project.site!}>
                  <Button variant={"linkBtn"}>
                    <CustomIcon
                      color={"black"}
                      icon={LuExternalLink}
                      me={"0.5rem"}
                      label={"Project Live Site"}
                    />
                    <Text color={"black"} textStyle={"smBold"}>
                      Live Site
                    </Text>
                  </Button>
                </Link>
              )}
            </Flex>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
