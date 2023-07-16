"use client";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
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
  const pt = useBreakpointValue({
    base: "80px",
  });

  const pb = useBreakpointValue({
    base: "110px",
    lg: "130px",
  });

  return (
    <Box w={"100wv"} px={px} pt={pt} pb={pb} mt={mt}>
      <Container maxW="1300px" p={"0"} my={my}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionContainer;
