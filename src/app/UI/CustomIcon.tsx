import React from "react";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

const CustomIcon = ({ color, icon }: { color: string; icon: IconType }) => {
  return (
    <Icon
      color={color}
      as={icon}
      h={{ base: "22px", lg: "32px" }}
      w={{ base: "22px", lg: "32px" }}
    ></Icon>
  );
};

export default CustomIcon;
