"use client";

import { Button, Flex, Highlight, Icon, Text } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import FullStopIcon from "./FullStopIcon";

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
          <FullStopIcon />
        </Text>

        <Text textStyle={"subheading"}>
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
          w={{ base: "100%", lg: "55%" }}
          textStyle={"smBold"}
          mt={".75rem"}
        >
          After leaving a 20 year career in media and live events to enter the
          tech field, I&#39;ve been developing full stack applications for the
          last year and a half. Lets connect!
        </Text>
        <Flex>
          <Button variant={"whiteSqBtn"} mt={"1.5rem"}>
            Contact me
          </Button>
        </Flex>
      </Flex>
    </SectionContainer>
  );
}
