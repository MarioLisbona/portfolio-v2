"use client";
import {
  Flex,
  Text,
  Icon,
  Wrap,
  WrapItem,
  Button,
  Link,
  Box,
} from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import FullStopIcon from "../UI/FullStopIcon";
import HorizontalLine from "../UI/HorizontalLine";
import { BsTerminalFill } from "react-icons/bs";
import { PiArrowRightBold } from "react-icons/pi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import TechBox from "../UI/TechBox";
import { techStack } from "../constants/techStack";
import { aboutContent } from "../constants/aboutContent";
import Header from "../UI/Header";
import CustomIcon from "../UI/CustomIcon";
import SocialIcon from "../UI/SocialIcon";
import Parser from "html-react-parser";
import { Reveal } from "../UI/Reveal";

const About = () => {
  return (
    <Box
      id={"about"}
      pt={{ base: "30px", md: "70px" }}
      mt={{ base: "-30px", md: "-70px" }}
    >
      <SectionContainer>
        <Header title={"About"} />
        <Flex
          w={"100%"}
          direction={{ base: "column", xl: "row" }}
          justify={"space-between"}
        >
          <Reveal>
            <Flex w={{ base: "100%", xl: "70%" }} direction={"column"}>
              {aboutContent.content.map((para, idx) => (
                <Reveal key={idx}>
                  <Text textStyle={"context"} my={"1rem"}>
                    {para}
                  </Text>
                </Reveal>
              ))}
            </Flex>
          </Reveal>
          <Flex
            w={{ base: "100%", xl: "30%" }}
            direction={"column"}
            ms={{ base: "0", xl: "1rem" }}
            mt={{ base: "1rem", xl: "0" }}
          >
            <Reveal>
              <Flex w={"100%"} align={"center"}>
                <CustomIcon color={"sage"} icon={BsTerminalFill} me={"1rem"} />
                <Text textStyle={"smallHeadingBold"}>Tech I&#39;m using</Text>
              </Flex>
            </Reveal>
            <Wrap mt={"1rem"} justify={{ base: "flex-start", xl: "center" }}>
              {techStack.map((item, idx) => (
                <Reveal key={idx}>
                  <WrapItem>
                    <TechBox>
                      <Text textStyle={"smBold"}>{item.label}</Text>
                    </TechBox>
                  </WrapItem>
                </Reveal>
              ))}
            </Wrap>
          </Flex>
        </Flex>
        <Flex w={"100%"} justify={"flex-start"} align={"center"} my={"1rem"}>
          <Reveal>
            <Text textStyle={"smallHeadingBold"} me={"1rem"}>
              My Links
            </Text>
          </Reveal>
          <Reveal>
            <CustomIcon color={"coolGray"} icon={PiArrowRightBold} />
          </Reveal>
          <Reveal>
            <SocialIcon href={"https://www.linkedin.com/in/mariolisbona/"}>
              <CustomIcon
                color={"sage"}
                icon={SiLinkedin}
                label={"My LinkedIn Profile"}
              />
            </SocialIcon>
          </Reveal>
          <Reveal>
            <SocialIcon href={"https://github.com/MarioLisbona/"}>
              <CustomIcon
                color={"sage"}
                icon={SiGithub}
                label={"My Github Profile"}
              />
            </SocialIcon>
          </Reveal>
          <Reveal>
            <SocialIcon href={"https://www.instagram.com/muzzza79/"}>
              <CustomIcon
                color={"sage"}
                icon={SiInstagram}
                label={"My Instagram Profile"}
              />
            </SocialIcon>
          </Reveal>
        </Flex>
      </SectionContainer>
    </Box>
  );
};

export default About;
