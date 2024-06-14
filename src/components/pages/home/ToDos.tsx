"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Flex } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

const ToDos = () => {
  return (
    <Box>
      <Flex gap="2">
        <Checkbox colorScheme="purple"></Checkbox>
        <Link
          href="/nogs/mint"
          fontWeight="semibold"
          textDecor="underline"
          color="purple.500"
        >
          mint nOGs
        </Link>
      </Flex>
      <Flex gap="2">
        <Checkbox colorScheme="purple"></Checkbox>
        <Link
          href="/faq/nounspace"
          fontWeight="semibold"
          textDecor="underline"
          color="purple.500"
        >
          participate in fair launch
        </Link>
      </Flex>
    </Box>
  );
};

export default ToDos;
