import { Flex, Text } from "@chakra-ui/react";
import FullStopIcon from "./FullStopIcon";
import HorizontalLine from "./HorizontalLine";

const CenterHeader = ({ title }: { title: string }) => {
  return (
    <Flex w={"100%"} justify={"space-between"} align={"center"}>
      <HorizontalLine />
      <Flex align={"flex-end"} my={"1rem"}>
        <Text textStyle={"subheadingBold"}>{title}</Text>
        <FullStopIcon />
      </Flex>
      <HorizontalLine />
    </Flex>
  );
};

export default CenterHeader;
