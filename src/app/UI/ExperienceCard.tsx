import {
  Card,
  Flex,
  Stack,
  CardBody,
  Wrap,
  CardFooter,
  Button,
  Text,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ExperienceDataProps } from "../constants/ExperienceData";
import TechBox from "./TechBox";
import Parser from "html-react-parser";

const ExperienceCard = ({ exp }: { exp: ExperienceDataProps }) => {
  return (
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
            <Text textStyle={"smBold"}>{exp.dates}</Text>
          </Flex>
          <Flex w={"100%"} justify={"space-between"} mb={"0.5rem"}>
            <Text color={"tan"} textStyle={"extraSmallHeadingBold"}>
              {exp.title}
            </Text>
            <Text textStyle={"smBold"}>{exp.location}</Text>
          </Flex>
          <UnorderedList>
            {exp.description.map((item, idx) => (
              <ListItem key={idx}>
                <Text textStyle={"context"} mb={"0.5rem"}>
                  {Parser(item)}
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
          <Flex>
            <Wrap mt={"1rem"} justify={{ base: "flex-start", xl: "center" }}>
              {exp.techStack.map((tech, idx) => (
                <TechBox key={idx}>
                  <Text textStyle={"smBold"}>{tech}</Text>
                </TechBox>
              ))}
            </Wrap>
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ExperienceCard;
