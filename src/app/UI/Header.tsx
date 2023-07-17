import { Flex, Text } from "@chakra-ui/react";
import FullStopIcon from "./FullStopIcon";
import HorizontalLine from "./HorizontalLine";

const Header = ({ title, reverse }: { title: string; reverse?: boolean }) => {
  return (
    <Flex
      w={"100%"}
      justify={"space-between"}
      align={"center"}
      direction={reverse ? "row-reverse" : "row"}
    >
      <Flex align={"flex-end"}>
        <Text textStyle={"subheadingBold"}>{title}</Text>
        <FullStopIcon />
      </Flex>
      <HorizontalLine />
    </Flex>
  );
};

export default Header;
