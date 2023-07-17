import React from "react";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

const CustomIcon = ({
  icon,
  color,
  ms,
  me,
  label,
}: {
  icon: IconType;
  color?: string;
  ms?: string;
  me?: string;
  label?: string;
}) => {
  return (
    <Icon
      color={color}
      as={icon}
      h={{ base: "22px", lg: "32px" }}
      w={{ base: "22px", lg: "32px" }}
      me={me}
      ms={ms}
      aria-label={label}
    ></Icon>
  );
};

export default CustomIcon;
