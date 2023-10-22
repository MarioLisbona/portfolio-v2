"use client";
import { Text, useColorModeValue, Flex, Button, Link } from "@chakra-ui/react";
import SocialIcon from "../UI/SocialIcon";
import CustomIcon from "../UI/CustomIcon";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      px={{ base: "1rem", lg: "1rem" }}
      py={{ base: ".25rem", lg: "1rem" }}
      justify={"space-between"}
      align={"center"}
      bg={useColorModeValue("white", "gray.900")}
      zIndex={999}
      borderTopColor={useColorModeValue("black", "whiteAlpha.300")}
      boxShadow="dark-lg"
      blur={"10px"}
    >
      <Flex py={{ base: ".5rem", md: "0rem" }}>
        <SocialIcon href={"https://www.linkedin.com/in/mariolisbona/"}>
          <CustomIcon
            color={useColorModeValue("black", "white")}
            icon={SiLinkedin}
            label={"My LinkedIn Profile"}
          />
        </SocialIcon>
        <SocialIcon href={"https://github.com/MarioLisbona/"}>
          <CustomIcon
            color={useColorModeValue("black", "white")}
            icon={SiGithub}
            label={"My Github Profile"}
          />
        </SocialIcon>
        <SocialIcon href={"https://www.instagram.com/muzzza79/"}>
          <CustomIcon
            color={useColorModeValue("black", "white")}
            icon={SiInstagram}
            label={"My Instagram Profile"}
          />
        </SocialIcon>
      </Flex>
      <Flex direction={"column"} align={{ base: "center", md: "flex-end" }}>
        <Text textStyle={"smContext"}>© 2023 Mario Lisbona</Text>
        <Text textStyle={"smContext"}>
          Website built with{" "}
          <Link href="#">
            <Button variant={"link"}>
              <Text textStyle={"smContext"}>NextJS</Text>
            </Button>
          </Link>{" "}
          and{" "}
          <Link href="#">
            <Button variant={"link"}>
              <Text textStyle={"smContext"}>ChakraUI</Text>
            </Button>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}
