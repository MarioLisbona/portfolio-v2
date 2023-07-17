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

const ProjectCard = () => {
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
            <Text textStyle={"extraSmallHeadingBold"}>Living room Sofa</Text>
            <Flex>
              <Link
                href={"https://www.linkedin.com/in/mariolisbona/"}
                target={"_blank"}
              >
                <Button variant={"linkSmallBtn"}>
                  <Icon
                    aria-label={"My LinkedIn Profile"}
                    me={"1rem"}
                    as={SiGithub}
                    color={"sage"}
                    h={{ base: "22px", lg: "32px" }}
                    w={{ base: "22px", lg: "32px" }}
                  />
                </Button>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/mariolisbona/"}
                target={"_blank"}
              >
                <Button variant={"linkSmallBtn"}>
                  <Icon
                    aria-label={"My LinkedIn Profile"}
                    me={"1rem"}
                    as={HiExternalLink}
                    color={"sage"}
                    h={{ base: "22px", lg: "32px" }}
                    w={{ base: "22px", lg: "32px" }}
                  />
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex w={"100%"} justify={"flex-start"}>
            <Text textStyle={"smBold"} color={"tan"}>
              tech-used-in-project
            </Text>
          </Flex>
          <Text textStyle={"context"}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="tan" fontSize="2xl">
            Learn More
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
