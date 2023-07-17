import {
  CardBody,
  Image,
  Stack,
  Text,
  Card,
  Flex,
  Link,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import SocialIcon from "./SocialIcon";
import CustomIcon from "./CustomIcon";

const ProjectCard = ({
  title,
  tech,
  content,
  repo,
  site,
}: {
  title: string;
  tech: string;
  content: string;
  repo: string;
  site: string;
}) => {
  return (
    <Card
      maxW="lg"
      bg={useColorModeValue("ivory", "whiteAlpha.50")}
      boxShadow={"lg"}
    >
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Flex w={"100%"} align={"center"} justify={"space-between"}>
            <Text textStyle={"extraSmallHeadingBold"}>{title}</Text>
            <Flex>
              <SocialIcon href={repo}>
                <CustomIcon
                  color={"sage"}
                  icon={SiGithub}
                  me={"1rem"}
                  label={"Project Github"}
                />
              </SocialIcon>
              <SocialIcon href={site}>
                <CustomIcon
                  color={"sage"}
                  icon={HiExternalLink}
                  me={"1rem"}
                  label={"Project Live Site"}
                />
              </SocialIcon>
            </Flex>
          </Flex>
          <Flex w={"100%"} justify={"flex-start"}>
            <Text textStyle={"smBold"} color={"tan"}>
              {tech}
            </Text>
          </Flex>
          <Text textStyle={"context"}>{content}</Text>
          <Text color="tan" fontSize="2xl">
            Learn More
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;