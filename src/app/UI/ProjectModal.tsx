import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Text,
  Flex,
  // Image,
  Link,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import Parser from "html-react-parser";
import { ProjectDataProps } from "../constants/projectsData";
import CustomIcon from "./CustomIcon";
import FullStopIcon from "./FullStopIcon";
import { ProjectType } from "@/types";
const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType;
}) => {
  const CustomOverlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(45deg)"
    >
      <Flex justify={"flex-end"}>
        <Button variant={"filledSqBtn"} onClick={onClose}>
          <Icon as={MdOutlineClose} />
        </Button>
      </Flex>
    </ModalOverlay>
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <CustomOverlay />
      <ModalContent borderRadius={"1rem"} minWidth="fit-content">
        <Image
          style={{ borderRadius: "1rem 1rem 0 0" }}
          src={project.thumbnail.image}
          width={900}
          height={600}
          alt={project.thumbnail.alt}
        />
        <Flex
          direction={"column"}
          align={"flex-start"}
          bg={"blackAlpha.800"}
          p={"2rem"}
          maxW={"900px"}
          maxH={"500px"}
          overflowY={"scroll"}
        >
          <Text color={"white"} textStyle={"smallHeadingBold"} mb={"1rem"}>
            {project.title}
          </Text>
          <Text color={"tan"} textStyle={"smallHeadingBold"} mb={"1rem"}>
            {project.tech}
          </Text>
          {/* <Text color={"white"} textStyle={"context"} mb={"1rem"}>
            {Parser(project.content)}
          </Text> */}
          <Text color={"white"} textStyle={"smallHeadingBold"} mb={"1rem"}>
            Project Links
            <FullStopIcon header modal />
          </Text>
          {/* <Flex>
            <Flex me={"1rem"} align={"center"}>
              {project.repo && (
                <Link href={project.repo!} target={"_blank"}>
                  <Button variant={"linkBtn"}>
                    <CustomIcon
                      color={"white"}
                      icon={SiGithub}
                      me={"0.5rem"}
                      label={"Project Github"}
                    />
                    <Text color={"white"} textStyle={"contextBold"}>
                      source code
                    </Text>
                  </Button>
                </Link>
              )}
            </Flex>
            <Flex align={"center"}>
              {project.site && (
                <Link href={project.site!} target={"_blank"}>
                  <Button variant={"linkBtn"}>
                    <CustomIcon
                      color={"white"}
                      icon={LuExternalLink}
                      me={"0.5rem"}
                      label={"Project Live Site"}
                    />
                    <Text color={"white"} textStyle={"contextBold"}>
                      Live Site
                    </Text>
                  </Button>
                </Link>
              )}
            </Flex>
          </Flex> */}
          <Flex justify={"flex-end"} mt={"1rem"}>
            <Button variant={"filledSqBtn"} onClick={onClose}>
              Close
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
