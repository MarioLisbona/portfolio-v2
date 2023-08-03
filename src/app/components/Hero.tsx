"use client";
import React from "react";
import { Box, Flex, Text, Link, Button, Highlight } from "@chakra-ui/react";
import { Reveal } from "../UI/Reveal";
import FullStopIcon from "../UI/FullStopIcon";
import { handleLinkClick } from "../lib/utils";
import SectionContainer from "../components/SectionContainer";
import { ProfileType } from "@/types";

export default function Hero({ profile }: any) {
  return (
    <Box id={"hero"}>
      <SectionContainer>
        <Flex
          direction={"column"}
          mt={{
            base: "3rem",
            md: "5rem",
            lg: "10rem,",
            xl: "12rem",
            "2xl": "15rem",
          }}
        >
          <Reveal>
            <Text p={"0"} textStyle={"headingBold"}>
              Hi, I&#39;m {profile.firstName}
              <FullStopIcon header />
            </Text>
          </Reveal>

          <Reveal>
            <Text textStyle={"subheadingBold"}>
              <Highlight
                styles={{
                  color: "tan",
                }}
                query={["Full Stack Developer"]}
              >
                I&#39;m a Full Stack Developer
              </Highlight>
            </Text>
          </Reveal>
          <Reveal>
            <Text
              w={{ base: "100%", lg: "65%" }}
              textStyle={"contextBold"}
              mt={"1rem"}
            >
              {profile.shortBio}
            </Text>
          </Reveal>
          <Reveal>
            <Flex>
              <Link
                href={"#contact"}
                onClick={(event) => handleLinkClick(event, "contact")}
              >
                <Button variant={"whiteSqBtn"} my={"2.5rem"}>
                  Contact me
                </Button>
              </Link>
            </Flex>
          </Reveal>
        </Flex>
      </SectionContainer>
    </Box>
  );
}
