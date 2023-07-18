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

const ProjectCard = ({
  thumbnail,
  title,
  tech,
  content,
  repo,
  site,
}: {
  thumbnail: string;
  title: string;
  tech: string;
  content: string;
  repo?: string;
  site?: string;
}) => {
  return (
    <Card
      maxW="lg"
      bg={useColorModeValue("ivory", "whiteAlpha.50")}
      boxShadow={"xl"}
    >
      <CardBody>
        <Flex justify="center">
          <Image
            src={thumbnail}
            height={300}
            width={600}
            alt={`Screenshot of ${title} project`}
          />
        </Flex>
        <Stack mt="6" spacing="3">
          <Flex w={"100%"} align={"center"} justify={"space-between"}>
            <Text textStyle={"extraSmallHeadingBold"}>{title}</Text>
            <Flex>
              {repo && (
                <SocialIcon href={repo!}>
                  <CustomIcon
                    color={"sage"}
                    icon={SiGithub}
                    me={"1rem"}
                    label={"Project Github"}
                  />
                </SocialIcon>
              )}
              {site && (
                <SocialIcon href={site!}>
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
              {tech}
            </Text>
          </Flex>
          <Text textStyle={"context"}>{Parser(content)}</Text>
          <Text color="tan" fontSize="2xl">
            Learn More
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
