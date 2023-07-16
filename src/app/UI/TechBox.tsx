import { Box } from "@chakra-ui/react";

const TechBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      borderRadius="lg"
      bg="coolGray"
      color="white"
      px={4}
      py={2}
      w={"fit-content"}
    >
      {children}
    </Box>
  );
};

export default TechBox;
