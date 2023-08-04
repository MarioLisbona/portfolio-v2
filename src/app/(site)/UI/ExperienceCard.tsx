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
import TechBox from "./TechBox";
import { Reveal } from "./Reveal";
import { MdCheckCircle } from "react-icons/md";
import { ExperienceType } from "@/types";
import { PortableText } from "@portabletext/react";
import moment from "moment";

const ExperienceCard = ({ exp }: { exp: ExperienceType }) => {
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
                {`${moment(exp.startDate).format("MMM Do YYYY")} - ${moment(
                  exp.endDate
                ).format("MMM Do YYYY")}`}
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
            {
              <UnorderedList m={"0rem"}>
                {exp.role.map((item, idx) => (
                  <Reveal key={idx}>
                    <ListItem>
                      <Flex
                        align={"flex-start"}
                        mb={{ base: "0.25rem", md: "0.5rem" }}
                      >
                        <ListIcon
                          as={MdCheckCircle}
                          color={"tan"}
                          mt={"0.25rem"}
                        />
                        <Text as={"span"} textStyle={"context"}>
                          <PortableText value={item} />
                        </Text>
                      </Flex>
                    </ListItem>
                  </Reveal>
                ))}
              </UnorderedList>
            }
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
