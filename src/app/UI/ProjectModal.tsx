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
} from "@chakra-ui/react";
import Parser from "html-react-parser";
import { ProjectDataProps } from "../constants/projectsData";
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
          <Text color={"white"} textStyle={"heading"}>
            {project.title}
          </Text>
          <Text color={"white"} textStyle={"smBold"}>
            {project.tech}
          </Text>
          <Text color={"white"} textStyle={"context"}>
            {Parser(project.content)}
          </Text>
          <Text>Project Links</Text>
          <Flex>
            <Flex>
              <Icon />
              <Text color={"white"} textStyle={"smBold"}>
                source code
              </Text>
            </Flex>
            <Flex>
              <Icon />
              <Text color={"white"} textStyle={"smBold"}>
                live site
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
