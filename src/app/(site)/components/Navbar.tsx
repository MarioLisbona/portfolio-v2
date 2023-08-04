"use client";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { navbarLinks } from "../constants/links";
import logo from "../../../../public/images/ml-logo.png";
import darkLogo from "../../../../public/images/ml-logo-dark.png";
import { handleLinkClick, handleMobileNavClick } from "../lib/utils";

export default function Navbar({ resume }: { resume: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={"1"}
        borderBottomColor={useColorModeValue("black", "whiteAlpha.300")}
        boxShadow="lg"
        blur={"10px"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            variant={"filledSqBtn"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link
              href={"#hero"}
              onClick={(event) => handleLinkClick(event, "hero")}
            >
              <Box>
                {colorMode === "light" ? (
                  <Image
                    boxSize={"50px"}
                    src={logo.src}
                    alt={"Mario Lisbona logo"}
                  />
                ) : (
                  <Image
                    boxSize={"50px"}
                    src={darkLogo.src}
                    alt={"Mario Lisbona dark mode logo"}
                  />
                )}
              </Box>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navbarLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={(event) => handleLinkClick(event, link.id)}
                >
                  <Button variant={"linkBtn"}>
                    <Text textStyle={"smBold"}>{link.label}</Text>
                  </Button>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link href={resume} target={"_blank"}>
              <Button
                display={{ base: "none", md: "inline-block" }}
                variant={"filledSqBtn"}
                me={"1rem"}
              >
                My Resume
              </Button>
            </Link>
            <Button onClick={toggleColorMode} variant={"filledSqBtn"}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {navbarLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={(event) =>
                    handleMobileNavClick(
                      event,
                      link.id,
                      isOpen,
                      onOpen,
                      onClose
                    )
                  }
                >
                  <Button variant={"linkSmallBtn"}>{link.label}</Button>
                </Link>
              ))}
              <Flex>
                <Link href={resume} target={"_blank"}>
                  <Button variant={"filledSqBtn"} me={"1rem"}>
                    My Resume
                  </Button>
                </Link>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
