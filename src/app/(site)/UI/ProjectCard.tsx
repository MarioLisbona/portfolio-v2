import {
  CardBody,
  Stack,
  Text,
  Card,
  Flex,
  Link,
  Button,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import SocialIcon from "./SocialIcon";
import CustomIcon from "./CustomIcon";
import ProjectModal from "./ProjectModal";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { ProjectType } from "@/types";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex direction={"column"}>
        <Reveal>
          <Card
            maxW="lg"
            bg={useColorModeValue("ivory", "whiteAlpha.50")}
            borderRadius={"1rem"}
          >
            <Link onClick={onOpen}>
              <CardBody
                maxHeight={{ base: "160px", md: "220px", lg: "280px" }}
                paddingBottom={0}
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    rotate: "1deg",
                  }}
                  transition={{
                    duration: 0.2,
                    delay: 0.1,
                  }}
                >
                  <Image
                    src={project.thumbnail.image}
                    width={600}
                    height={600}
                    alt={project.thumbnail.alt}
                  />
                </motion.div>
              </CardBody>
            </Link>
          </Card>
        </Reveal>
        <Card
          variant={"unstyled"}
          maxW="lg"
          bg={useColorModeValue("white", "gray.900")}
        >
          <CardBody>
            <Stack mt="6" spacing="3">
              <Flex w={"100%"} align={"center"} justify={"space-between"}>
                <Reveal>
                  <Text textStyle={"extraSmallHeadingBold"}>
                    {project.title}
                  </Text>
                </Reveal>
                <Flex>
                  {project.github && (
                    <Reveal>
                      <SocialIcon href={project.github}>
                        <CustomIcon
                          color={"sage"}
                          icon={SiGithub}
                          me={project.liveSite ? "1rem" : "0rem"}
                          label={"Project Github"}
                        />
                      </SocialIcon>
                    </Reveal>
                  )}
                  {project.liveSite && (
                    <Reveal>
                      <SocialIcon href={project.liveSite!}>
                        <CustomIcon
                          color={"sage"}
                          icon={LuExternalLink}
                          label={"Project Live Site"}
                        />
                      </SocialIcon>
                    </Reveal>
                  )}
                </Flex>
              </Flex>
              <Flex w={"100%"} justify={"flex-start"}>
                {project.tech.map((tech, idx) => (
                  <Reveal key={idx}>
                    {idx < project.tech.length - 1 ? (
                      <Text textStyle={"smBold"} color={"tan"}>
                        {`${tech}-`}
                      </Text>
                    ) : (
                      <Text textStyle={"smBold"} color={"tan"}>
                        {tech}
                      </Text>
                    )}
                  </Reveal>
                ))}
              </Flex>
              <Reveal>
                <Text textStyle={"context"}>{project.shortDescription}</Text>
              </Reveal>
              <Flex justify={"flex-start"}>
                <Reveal>
                  <Button variant={"linkBtn"} onClick={onOpen}>
                    <Text textStyle={"extraSmallHeadingBold"} color="tan">
                      Learn More
                    </Text>
                  </Button>
                </Reveal>
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
