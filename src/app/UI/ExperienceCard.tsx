import {
  Card,
  Flex,
  Stack,
  CardBody,
  Wrap,
  Text,
  useColorModeValue,
  UnorderedList,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ExperienceDataProps } from "../constants/ExperienceData";
import TechBox from "./TechBox";
import Parser from "html-react-parser";
import { Reveal } from "./Reveal";
import { MdCheckCircle } from "react-icons/md";

const ExperienceCard = ({ exp }: { exp: ExperienceDataProps }) => {
  return (
    <Reveal>
      <Card
        bg={useColorModeValue("ivory", "whiteAlpha.50")}
        boxShadow={"lg"}
        variant="outline"
        my={"1rem"}
      >
        <Stack>
          <CardBody>
            <Flex w={"100%"} justify={"space-between"} mb={"0.5rem"}>
              <Text textStyle={"extraSmallHeadingBold"}>{exp.company}</Text>
              <Text textStyle={"extraSmallHeadingBold"} textAlign={"right"}>
                {exp.dates}
              </Text>
            </Flex>
            <Flex w={"100%"} justify={"space-between"} mb={"0.5rem"}>
              <Text color={"tan"} textStyle={"extraSmallHeadingBold"}>
                {exp.title}
              </Text>
              <Text textStyle={"extraSmallHeadingBold"} textAlign={"right"}>
                {exp.location}
              </Text>
            </Flex>
            <UnorderedList m={"0rem"}>
              {exp.description.map((item, idx) => (
                <Reveal key={idx}>
                  <ListItem>
                    <Flex align={"flex-start"} mb={"0.5rem"}>
                      <ListIcon
                        as={MdCheckCircle}
                        color={"tan"}
                        mt={"0.25rem"}
                      />
                      <Text textStyle={"context"}>{Parser(item)}</Text>
                    </Flex>
                  </ListItem>
                </Reveal>
              ))}
            </UnorderedList>
            <Flex>
              <Wrap mt={"1rem"} justify={{ base: "flex-start", xl: "center" }}>
                {exp.techStack.map((tech, idx) => (
                  <Reveal key={idx}>
                    <TechBox>
                      <Text textStyle={"smBold"}>{tech}</Text>
                    </TechBox>
                  </Reveal>
                ))}
              </Wrap>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Reveal>
  );
};

export default ExperienceCard;
