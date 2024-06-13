import type { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  maxW: "container.xl",
};

const variants = {
  full: {
    maxW: "container.full",
  },
};

export const container = {
  baseStyle,
  variants,
};
