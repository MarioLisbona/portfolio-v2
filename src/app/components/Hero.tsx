"use client";

import { Button, Flex, Highlight, Icon, Link, Text } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import { FaCircle } from "react-icons/fa";
import { handleLinkClick } from "../lib/utils";

export default function Hero() {
  return (
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
        <Text p={"0"} textStyle={"headingBold"}>
          Hi, I&#39;m Mario
        </Text>

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
        <Text
          w={{ base: "100%", lg: "65%" }}
          textStyle={"contextBold"}
          mt={"1rem"}
        >
          After leaving a 20 year career in media and live events to enter the
          tech field, I&#39;ve been developing full stack applications for the
          last year and a half. Lets connect!
        </Text>
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
      </Flex>
    </SectionContainer>
  );
}
