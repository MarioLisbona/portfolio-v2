import { Flex, Text } from "@chakra-ui/react";
import FullStopIcon from "./FullStopIcon";
import HorizontalLine from "./HorizontalLine";
import { Reveal } from "./Reveal";

const Header = ({ title, reverse }: { title: string; reverse?: boolean }) => {
  return (
    <Flex
      w={"100%"}
      justify={"space-between"}
      align={"center"}
      direction={reverse ? "row-reverse" : "row"}
    >
      <Flex align={"flex-end"} my={"1rem"}>
        <Reveal>
          <Text textStyle={"subheadingBold"}>{title}</Text>
        </Reveal>
        <Reveal>
          <FullStopIcon />
        </Reveal>
      </Flex>
      <HorizontalLine />
    </Flex>
  );
};

export default Header;
