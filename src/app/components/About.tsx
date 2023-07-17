"use client";
import {
  Flex,
  Text,
  Icon,
  Wrap,
  WrapItem,
  Button,
  Link,
} from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import FullStopIcon from "../UI/FullStopIcon";
import HorizontalLine from "../UI/HorizontalLine";
import { BsTerminalFill } from "react-icons/bs";
import { PiArrowRightBold } from "react-icons/pi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import TechBox from "../UI/TechBox";
import { techStack } from "../data/techStack";
import { aboutContent } from "../data/about.Content";
import Header from "../UI/Header";
import CustomIcon from "../UI/CustomIcon";

const About = () => {
  return (
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
            <CustomIcon color={"sage"} icon={BsTerminalFill} />
            <Text ms={"1rem"} textStyle={"smallHeadingBold"}>
              Tech I&#39;m using
            </Text>
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
      <Flex w={"100%"} justify={"flex-start"} align={"center"}>
        <Text textStyle={"smallHeadingBold"} me={"1rem"}>
          My Links
        </Text>
        <Icon
          me={"1rem"}
          as={PiArrowRightBold}
          color={"coolGray"}
          h={{ base: "22px", lg: "32px" }}
          w={{ base: "22px", lg: "32px" }}
        />
        <Link
          href={"https://www.linkedin.com/in/mariolisbona/"}
          target={"_blank"}
        >
          <Button variant={"linkSmallBtn"}>
            <Icon
              aria-label={"My LinkedIn Profile"}
              me={"1rem"}
              as={SiLinkedin}
              color={"sage"}
              h={{ base: "22px", lg: "32px" }}
              w={{ base: "22px", lg: "32px" }}
            />
          </Button>
        </Link>
        <Link href={"https://github.com/MarioLisbona/"} target={"_blank"}>
          <Button variant={"linkSmallBtn"}>
            <Icon
              aria-label={"My Github Profile"}
              me={"1rem"}
              as={SiGithub}
              color={"sage"}
              h={{ base: "22px", lg: "32px" }}
              w={{ base: "22px", lg: "32px" }}
            />
          </Button>
        </Link>
        <Link href={"https://www.instagram.com/muzzza79/"} target={"_blank"}>
          <Button variant={"linkSmallBtn"}>
            <Icon
              aria-label={"My Instagram Profile"}
              me={"1rem"}
              as={SiInstagram}
              color={"sage"}
              h={{ base: "22px", lg: "32px" }}
              w={{ base: "22px", lg: "32px" }}
            />
          </Button>
        </Link>
      </Flex>
    </SectionContainer>
  );
};

export default About;
