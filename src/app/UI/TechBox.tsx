import { Box } from "@chakra-ui/react";

const TechBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      borderRadius="lg"
      bg="coolGray"
      color="white"
      px={"1rem"}
      py={"0.5rem"}
      w={"fit-content"}
    >
      {children}
    </Box>
  );
};

export default TechBox;
