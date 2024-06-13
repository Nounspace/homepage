"use client";

import { Box, Text, Flex } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

const ToDos = () => {
  return (
    <Box>
      <Flex gap="2">
        <Checkbox colorScheme="purple" isChecked>
          <Text fontWeight="semibold" textDecor="underline" color="purple.500">
            mint nOGs
          </Text>
        </Checkbox>
      </Flex>
      <Flex gap="2">
        <Checkbox colorScheme="purple">
          <Text fontWeight="semibold" textDecor="underline" color="purple.500">
            participate in fair launch
          </Text>
        </Checkbox>
      </Flex>
    </Box>
  );
};

export default ToDos;
