"use client";
import { FaCircle } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
const FullStopIcon = ({
  header,
  modal,
}: {
  header?: boolean;
  modal?: boolean;
}) => {
  return (
    <Icon
      ms={{ base: "2px", md: "5px" }}
      mb={header ? "0rem" : { base: "6px", md: "23px" }}
      as={FaCircle}
      w={modal ? "8px" : { base: "8px", md: "12px", lg: "16px" }}
      h={modal ? "8px" : { base: "8px", md: "12px", lg: "16px" }}
      color={"tan"}
    />
  );
};

export default FullStopIcon;
