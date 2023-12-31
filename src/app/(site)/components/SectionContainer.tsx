"use client";
import {
  Box,
  Container,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const SectionContainer = ({
  children,
  my,
  mt,
}: {
  children: React.ReactNode;
  my?: any;
  mt?: any;
}) => {
  const px = useBreakpointValue({
    base: "0px",
    sm: "20px",
    md: "30px",
    lg: "40px",
  });
  const py = useBreakpointValue({
    base: "20px",
    lg: "26px",
  });

  return (
    <Box
      w={"100wv"}
      px={px}
      py={py}
      mt={mt}
      bg={useColorModeValue("", "gray.900")}
      zIndex={0}
    >
      <Container maxW="1300px" my={my}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionContainer;
