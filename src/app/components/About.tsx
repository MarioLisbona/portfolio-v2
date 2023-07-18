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

const About = () => {
  return (
    <Box id={"about"} pt={"70px"} mt={"-70px"}>
      <SectionContainer>
        <Header title={"About"} />
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
              <CustomIcon color={"sage"} icon={BsTerminalFill} me={"1rem"} />
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
        <Flex w={"100%"} justify={"flex-start"} align={"center"} my={"1rem"}>
          <Text textStyle={"smallHeadingBold"} me={"1rem"}>
            My Links
          </Text>
          <CustomIcon color={"coolGray"} icon={PiArrowRightBold} me={"1rem"} />
          <SocialIcon href={"https://www.linkedin.com/in/mariolisbona/"}>
            <CustomIcon
              color={"sage"}
              icon={SiLinkedin}
              me={"1rem"}
              label={"My LinkedIn Profile"}
            />
          </SocialIcon>
          <SocialIcon href={"https://github.com/MarioLisbona/"}>
            <CustomIcon
              color={"sage"}
              icon={SiGithub}
              me={"1rem"}
              label={"My Github Profile"}
            />
          </SocialIcon>
          <SocialIcon href={"https://www.instagram.com/muzzza79/"}>
            <CustomIcon
              color={"sage"}
              icon={SiInstagram}
              me={"1rem"}
              label={"My Instagram Profile"}
            />
          </SocialIcon>
        </Flex>
      </SectionContainer>
    </Box>
  );
};

export default About;
