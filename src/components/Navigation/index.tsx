"use client";

import Image from "next/image";
import { Container, Box, HStack, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Player from "../Player";

import logo from "./logo.svg";

const Navigation = () => {
  return (
    <Box
      py={{ base: 4, md: 12 }}
      borderBottom="1px solid"
      borderColor={{ base: "gray.300", md: "transparent" }}
    >
      <Container>
        <Flex justifyContent="space-between">
          <HStack as="nav" px="4">
            <Link href="/">
              <Image src={logo} alt="Nounspace" width={40} />
            </Link>
          </HStack>
          <Box display={{ base: "block", md: "none" }}>
            <Player />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
