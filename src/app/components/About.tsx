"use client";
import { Flex, Text, Icon, Wrap, WrapItem, Center } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import FullStopIcon from "../UI/FullStopIcon";
import HorizontalLine from "../UI/HorizontalLine";
import { BsTerminalFill } from "react-icons/bs";
import TechBox from "../UI/TechBox";
import { techStack } from "../data/techStack";
import { aboutContent } from "../data/about.Content";

const About = () => {
  return (
    <SectionContainer>
      <Flex w={"100%"} justify={"space-between"} align={"center"}>
        <Flex align={"flex-end"}>
          <Text textStyle={"subheadingBold"}>About</Text>
          <FullStopIcon />
        </Flex>
        <HorizontalLine />
      </Flex>
      <Flex
        w={"100%"}
        direction={{ base: "column", xl: "row" }}
        justify={"space-between"}
      >
        <Flex w={{ base: "100%", xl: "70%" }} direction={"column"}>
          {aboutContent.map((item, idx) => (
            <Text key={idx} textStyle={"context"} my={"1rem"}>
              {item.para}
            </Text>
          ))}
        </Flex>
        <Flex
          w={{ base: "100%", xl: "30%" }}
          direction={"column"}
          ms={{ base: "0", xl: "1rem" }}
          mt={{ base: "1rem", xl: "0" }}
        >
          <Flex w={"100%"} align={"center"}>
            <Icon
              color={"sage"}
              as={BsTerminalFill}
              h={{ base: "22px", lg: "32px" }}
              w={{ base: "22px", lg: "32px" }}
              me={"1rem"}
            />
            <Text textStyle={"smallHeadingBold"}>Tech I&#39;m using</Text>
          </Flex>
          <Wrap mt={"1rem"} justify={{ base: "flex-start", xl: "center" }}>
            {techStack.map((item, idx) => (
              <WrapItem key={idx}>
                <TechBox>
                  <Text textStyle={"smBold"}>{item.label}</Text>
                </TechBox>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

export default About;
