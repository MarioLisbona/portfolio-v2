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
} from "@chakra-ui/react";
import Parser from "html-react-parser";
import { ProjectDataProps } from "../constants/projectsData";
import Image from "next/image";
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
      <ModalContent minWidth="fit-content">
        <Card>
          <CardBody padding={0}>
            <Image
              src={project.thumbnail}
              height={500}
              width={800}
              alt={`Screenshot of ${project.title} project`}
            />
          </CardBody>
        </Card>
        {/* <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <CardBody>
                <Text py="2">{Parser(project.content)}</Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Buy Latte
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
