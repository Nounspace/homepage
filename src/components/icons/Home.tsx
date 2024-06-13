import { Icon, IconProps } from "@chakra-ui/react";

const HomeIcon = (props: IconProps) => (
  <Icon viewBox="0 0 18 18" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 9 8-8 8 8M3 7.5V16a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1V7.5"
    />
  </Icon>
);

export default HomeIcon;
