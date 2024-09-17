"use client";

import { usePathname } from "next/navigation";

import { Link } from "@chakra-ui/next-js";
import { Box, Stack, Text, Button, IconButton, Flex } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  LiaRocketSolid,
  LiaHomeSolid,
  LiaSunSolid,
  LiaQuestionCircle,
  LiaPenSolid,
} from "react-icons/lia";
import { SiFarcaster } from "react-icons/si";
import { IconType } from "react-icons";
import Player from "@/components/Player";

const LINKS = [
  {
    id: "home",
    href: "https://nounspace.com",
    label: "Home",
    icon: LiaHomeSolid,
    isExternal: true,
  },
  {
    id: "space",
    href: "https://space.nounspace.com",
    label: "$SPACE Fair Launch",
    icon: LiaRocketSolid,
    isExternal: true,
  },
  {
    id: "nogs",
    href: "/nogs/mint",
    label: "nOGs",
    icon: LiaSunSolid,
    isExternal: true,
  },
  {
    id: "faq",
    href: "/faq/nounspace",
    label: "FAQ",
    icon: LiaQuestionCircle,
    isExternal: true,
  },
];

const Sidebar = () => {
  return (
    <Box
      p={4}
      pb={{ base: "14", md: "4" }}
      borderRadius={{ base: "2xl", md: "lg" }}
      border="1px solid"
      borderColor="gray.200"
      position={{ base: "fixed", md: "static" }}
      inset="auto 0 -2rem 0"
      bgColor="white"
      boxShadow={{ base: "0px -2px 16px 0px #00000029", md: "none" }}
      zIndex="1000"
    >
      <Stack
        align="start"
        gap={{ base: "8", md: "4" }}
        px="2"
        direction={{ base: "row", md: "column" }}
        justifyContent={{ base: "center", md: "start" }}
      >
        {LINKS.map((link, index) => (
          <SidebarLink
            key={index}
            href={link.href}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </Stack>
      <Box mt="40" display={{ base: "none", md: "block" }}>
        <Flex mb="2" gap="2">
          <Link href="https://nounspace.com" isExternal>
            <Button colorScheme="purple" flexGrow="1">
              Sign in with{" "}
              <Icon
                ml="2"
                color="white"
                width="6"
                height="6"
                as={SiFarcaster}
              />
            </Button>
          </Link>
          <Link href="https://nounspace.com" isExternal>
            <IconButton
              colorScheme="purple"
              aria-label="Edit"
              icon={<Icon as={LiaPenSolid} width="6" height="6" />}
            />
          </Link>
        </Flex>
        <Player />
      </Box>
    </Box>
  );
};

const SidebarLink = ({
  href,
  label,
  icon,
  isExternal,
}: {
  href: string;
  label: string;
  icon: IconType;
  isExternal?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      color={pathname === href ? "purple.500" : "black"}
      _activeLink={{ color: "purple.500" }}
      _hover={{ color: "purple.400" }}
      display="flex"
      alignItems="center"
      gap="2"
      fontWeight="semibold"
      isExternal={isExternal}
    >
      <Icon
        as={icon}
        width={{ base: "8", md: "6" }}
        height={{ base: "8", md: "6" }}
      />
      <Text as="span" display={{ base: "none", md: "inline" }}>
        {label}
      </Text>
    </Link>
  );
};

export default Sidebar;
