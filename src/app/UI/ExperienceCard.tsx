import {
  Card,
  Flex,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ExperienceCard = () => {
  return (
    <Card
      bg={useColorModeValue("ivory", "whiteAlpha.50")}
      boxShadow={"lg"}
      variant="outline"
      my={"1rem"}
    >
      <Stack>
        <CardBody>
          <Flex w={"100%"} justify={"space-between"}>
            <Text textStyle={"extraSmallHeadingBold"}>Edit on The Spot</Text>
            <Text textStyle={"smBold"}>May, 2023 - Present</Text>
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Text color={"tan"} textStyle={"extraSmallHeadingBold"}>
              Software Developer
            </Text>
            <Text textStyle={"smBold"}>Sydney (Remote)</Text>
          </Flex>

          <Text textStyle={"context"}>
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ExperienceCard;
