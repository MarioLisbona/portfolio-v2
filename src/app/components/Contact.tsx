import React from "react";
import SectionContainer from "./SectionContainer";
import Header from "../UI/Header";
import CenterHeader from "../UI/CenterHeader";
import { Box, Button, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import CustomIcon from "../UI/CustomIcon";

const Contact = () => {
  return (
    <Box id={"contact"} pt={"70px"} mt={"70px"}>
      <SectionContainer>
        <CenterHeader title={"Contact"} />
        <Flex
          w={"100%"}
          px={"5rem"}
          pt={"2rem"}
          py={"6rem"}
          direction={"column"}
          align={"center"}
        >
          <Text textAlign={"center"} textStyle={"context"}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href={"https://www.linkedin.com/in/mariolisbona/"}
              target={"_blank"}
            >
              <Button variant={"link"}>
                <Text textStyle={"context"}>Linkedin</Text>
              </Button>{" "}
            </Link>
            if you prefer connecting on social media.
          </Text>
          <Link
            href={"mailto:mario.lisbona@gmail.com"}
            _hover={{ color: "tan" }}
          >
            <Flex mt={"1rem"} align={"center"}>
              <Flex>
                <CustomIcon icon={MdEmail} me={"0.5rem"} />
              </Flex>
              <Flex>
                <Text textStyle={"contextBold"}>mario.lisbona@gmail.com</Text>
              </Flex>
            </Flex>
          </Link>
        </Flex>
      </SectionContainer>
    </Box>
  );
};

export default Contact;
