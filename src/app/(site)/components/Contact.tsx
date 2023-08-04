"use client";
import React from "react";
import SectionContainer from "./SectionContainer";
import CenterHeader from "../UI/CenterHeader";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import CustomIcon from "../UI/CustomIcon";
import { Reveal } from "../UI/Reveal";
import { ProfileType } from "@/types";

const Contact = ({ profile }: { profile: ProfileType }) => {
  return (
    <Box id={"contact"} pt={"70px"} mt={"-70px"}>
      <SectionContainer>
        <CenterHeader title={"Contact"} />
        <Flex
          w={"100%"}
          px={{ base: "1rem", md: "5rem" }}
          direction={"column"}
          align={"center"}
        >
          <Reveal>
            <Text textAlign={"center"} textStyle={"context"}>
              Shoot me an email if you want to connect! You can also find me on{" "}
              <Link href={profile.socialLinks.linkedin} target={"_blank"}>
                <Button variant={"link"}>
                  <Text textStyle={"context"}>Linkedin</Text>
                </Button>{" "}
              </Link>
              if you prefer connecting on social media.
            </Text>
          </Reveal>
          <Reveal>
            <Link
              href={`mailto:${profile.email}`}
              _hover={{ color: "tan" }}
              target={"_blank"}
            >
              <Flex mt={"1rem"} align={"center"}>
                <Flex>
                  <CustomIcon icon={MdEmail} me={"0.5rem"} />
                </Flex>
                <Flex>
                  <Text textStyle={"contextBold"}>{profile.email}</Text>
                </Flex>
              </Flex>
            </Link>
          </Reveal>
        </Flex>
      </SectionContainer>
    </Box>
  );
};

export default Contact;
