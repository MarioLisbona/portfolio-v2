import React from "react";
import { Card } from "@chakra-ui/react";

const HorizontalLine = () => {
  return (
    <Card
      bg={"transparent"}
      w={"80%"}
      h={"30px"}
      align={"center"}
      variant={"unstyled"}
      _before={{
        content: "''",
        position: "absolute",
        top: "50%",
        left: 15,
        borderTop: "1px solid black",
        background: "black",
        width: "100%",
        transform: "translateY(-50%)",
      }}
    ></Card>
  );
};

export default HorizontalLine;
