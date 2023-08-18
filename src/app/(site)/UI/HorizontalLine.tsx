import React from "react";
import { Card, useColorModeValue } from "@chakra-ui/react";

const HorizontalLine = () => {
  return (
    <Card
      bg={useColorModeValue("gray.800", "white")}
      w={"80%"}
      h={{ base: "1px", md: "3px" }}
      align={"center"}
      variant={"unstyled"}
    ></Card>
  );
};

export default HorizontalLine;
