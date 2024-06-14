"use client";

import Image from "next/image";
import { Container, Box, HStack, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Player from "../Player";

const Navigation = () => {
  return (
    <Box
      py={{ base: 2, md: 6 }}
      borderBottom="1px solid"
      borderColor={{ base: "gray.300", md: "transparent" }}
    >
      <Container>
        <Flex justifyContent="space-between">
          <HStack as="nav">
            <Link href="/" display="block" maxW="100px">
              <Image
                src="/hand-nogs.png"
                alt="Nounspace"
                width={176}
                height={150}
              />
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
