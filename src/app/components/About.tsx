"use client";
import { Flex, Text, Wrap, WrapItem, Box } from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import { BsTerminalFill } from "react-icons/bs";
import { PiArrowRightBold } from "react-icons/pi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import TechBox from "../UI/TechBox";
import { techStack } from "../constants/techStack";
import { aboutContent } from "../constants/aboutContent";
import Header from "../UI/Header";
import CustomIcon from "../UI/CustomIcon";
import SocialIcon from "../UI/SocialIcon";
import { Reveal } from "../UI/Reveal";
import { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";

const About = ({ profile }: { profile: ProfileType }) => {
  console.log(profile.fullBio);
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
              {profile.fullBio.map((para, idx) => (
                <Reveal key={idx}>
                  <Text as={"span"} textStyle={"context"} my={"1rem"}>
                    <PortableText value={para} />
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
              {profile.skills.map((item, idx) => (
                <Reveal key={idx}>
                  <WrapItem>
                    <TechBox>
                      <Text textStyle={"smBold"}>{item}</Text>
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
