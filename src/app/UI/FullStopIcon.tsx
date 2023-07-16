"use client";
import { FaCircle } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
const FullStopIcon = () => {
  return (
    <Icon
      ms={{ base: "2px", md: "5px" }}
      mb={{ base: "6px", md: "12px" }}
      as={FaCircle}
      w={{ base: "8px", md: "12px", lg: "16px" }}
      h={{ base: "8px", md: "12px", lg: "16px" }}
      color={"tan"}
    />
  );
};

export default FullStopIcon;
