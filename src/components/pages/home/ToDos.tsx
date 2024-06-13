"use client";

import { Box, Text, Flex } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const ToDos = () => {
  return (
    <Box>
      <Flex gap="2">
        <Icon as={MdOutlineCheckBox} width="6" height="6" />
        <Text fontWeight="semibold" textDecor="underline" color="purple.500">
          mint nOGs
        </Text>
      </Flex>
      <Flex gap="2">
        <Icon as={MdOutlineCheckBoxOutlineBlank} width="6" height="6" />
        <Text fontWeight="semibold" textDecor="underline" color="purple.500">
          participate in fair launch
        </Text>
      </Flex>
    </Box>
  );
};

export default ToDos;
