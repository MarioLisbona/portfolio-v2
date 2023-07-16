"use client";
import {
  Flex,
  Text,
  Icon,
  Box,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import SectionContainer from "./SectionContainer";
import FullStopIcon from "../UI/FullStopIcon";
import HorizontalLine from "../UI/HorizontalLine";
import { BsTerminalFill } from "react-icons/bs";
import TechBox from "../UI/TechBox";

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
      <Flex w={"100%"} justify={"space-between"}>
        <Flex w={"70%"} direction={"column"}>
          <Text textStyle={"context"} my={"1rem"}>
            I currently work for Google on Google Photos. I also toss in my ¢2
            with the design systems teams from time to time (once an artist,
            always an artist, amirite?).
          </Text>
          <Text textStyle={"context"} my={"1rem"}>
            I currently work for Google on Google Photos. I also toss in my ¢2
            with the design systems teams from time to time (once an artist,
            always an artist, amirite?).
          </Text>
          <Text textStyle={"context"} my={"1rem"}>
            I currently work for Google on Google Photos. I also toss in my ¢2
            with the design systems teams from time to time (once an artist,
            always an artist, amirite?).
          </Text>
        </Flex>
        <Flex w={"25%"} direction={"column"} ms={"1rem"}>
          <Flex w={"100%"} align={"center"}>
            <Icon
              color={"sage"}
              as={BsTerminalFill}
              h={"32px"}
              w={"32px"}
              me={"1rem"}
            />
            <Text textStyle={"smallHeadingBold"}>Tech I'm using</Text>
          </Flex>
          <Wrap mt={"1rem"} justify={"center"}>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>JavaScript</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>TypeScript</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>Python</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>HTML</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>CSS</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>Next.js</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>React</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>NodeJS</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>Express</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>Postgres</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>MongoDb</Text>
              </TechBox>
            </WrapItem>
            <WrapItem>
              <TechBox>
                <Text textStyle={"smBold"}>Github</Text>
              </TechBox>
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

export default About;
