import React from "react";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

const CustomIcon = ({
  icon,
  color,
  ms,
  me,
  label,
  small,
}: {
  icon: IconType;
  color?: string;
  ms?: string;
  me?: string;
  label?: string;
  small?: boolean;
}) => {
  return (
    <Icon
      color={color}
      as={icon}
      h={small ? { base: "1px", lg: "16px" } : { base: "22px", lg: "32px" }}
      w={small ? { base: "1px", lg: "16px" } : { base: "22px", lg: "32px" }}
      me={me}
      ms={ms}
      aria-label={label}
    ></Icon>
  );
};

export default CustomIcon;
