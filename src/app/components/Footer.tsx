"use client";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";

import SocialIcon from "../UI/SocialIcon";
import CustomIcon from "../UI/CustomIcon";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <Flex
      px={{ base: ".25rem", lg: "1rem" }}
      py={{ base: ".25rem", lg: "1rem" }}
      justify={"space-between"}
      align={"center"}
      bg={useColorModeValue("white", "gray.900")}
      zIndex={999}
      borderTopColor={useColorModeValue("black", "whiteAlpha.300")}
      boxShadow="dark-lg"
      blur={"10px"}
    >
      <Flex>
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
      <Text textStyle={"smContext"}>© 2023 Mario Lisbona</Text>
    </Flex>
  );
}
