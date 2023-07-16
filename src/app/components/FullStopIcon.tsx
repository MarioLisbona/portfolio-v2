"use client";
import { FaCircle } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
const FullStopIcon = () => {
  return (
    <Icon
      ms={".25rem"}
      as={FaCircle}
      w={{ base: "10px", md: "16px", lg: "20px" }}
      h={{ base: "10px", md: "16px", lg: "20px" }}
      color={"tan"}
    />
  );
};

export default FullStopIcon;
