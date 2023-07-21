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
          borderRadius={"1rem"}
          src={project.thumbnail}
          width={900}
          alt={`Screenshot of ${project.title} project`}
        />
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
