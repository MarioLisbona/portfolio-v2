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
    base: "16px",
    sm: "20px",
    md: "50px",
    lg: "80px",
  });
  const py = useBreakpointValue({
    base: "34px",
    lg: "46px",
  });

  return (
    <Box
      w={"100wv"}
      px={px}
      py={py}
      mt={mt}
      bg={useColorModeValue("ivory", "gray.900")}
    >
      <Container maxW="1300px" my={my}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionContainer;
