import type { Metadata } from "next";

import Image from "next/image";
import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import ToDos from "@/components/pages/home/ToDos";

export const metadata: Metadata = {
  title:
    "Welcome to nounspace - the customizable Farcaster client with infinite possibilities",
  description:
    "Customize your space with Themes, Fidgets, and Tabs. Embrace user control and community building in Web3.",
};

const dyorLinks = [
  {
    imgSrc: "/farcaster-logo.png",
    alt: "Farcaster Logo",
    href: "https://warpcast.com/~/channel/nounspace",
  },
  {
    imgSrc: "/github-logo.png",
    alt: "Github Logo",
    href: "https://github.com/Nounspace",
  },
  {
    imgSrc: "/nouns-prophouse.png",
    alt: "Nouns Prophouse",
    href: "https://prop.house/0x767a3bdf2aa3b3201b794927a997fcf4e50d4702/21",
  },
  {
    imgSrc: "/discord-logo.png",
    alt: "Discord Logo",
    href: "https://discord.gg/CKbCNWU4",
  },
  {
    imgSrc: "/paragraph-logo.png",
    alt: "Paragraph Logo",
    href: "https://paragraph.xyz/@nounspace/",
  },
  {
    imgSrc: "/basescan_logo.jpg",
    alt: "BaseScan Logo",
    href: "https://basescan.org/address/0x48C6740BcF807d6C47C864FaEEA15Ed4dA3910Ab",
  },
  {
    imgSrc: "/dexscreener_logo.webp",
    alt: "DexScreener logo",
    href: "https://dexscreener.com/base/0x48C6740BcF807d6C47C864FaEEA15Ed4dA3910Ab",
  },
];

const HomePage = () => {
  return (
    <>
      <Box borderRadius="2xl" border="1px solid" borderColor="gray.300" p="4">
        <Text textStyle="h2">nounspace is not yet supported on mobile</Text>
        <Text textStyle="h3" mt="4">
          Stay tuned for native iOS and Android apps, and come back on desktop
          in the meantime.
        </Text>
        <Text mt="4">
          Fear not, not all hope for mobile users is lost! You can still learn
          about nounspace, participate in the $SPACE fair launch, or mint nOGs,
          the early access NFT that gives you free premium nounspace for life.
        </Text>
      </Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "32% 1fr" }}
        gap={{ base: "4", md: "8" }}
        mt={{ base: "4", md: "8" }}
      >
        <Box borderRadius="2xl" border="1px solid" borderColor="gray.300" p="4">
          <Text textStyle="h2" mb="4">
            nounspace to-do’s:
          </Text>
          <ToDos />
        </Box>
        <Box borderRadius="2xl" border="1px solid" borderColor="gray.300" p="4">
          <Text textStyle="h2" mb="4">
            DYOR
          </Text>
          <Flex flexWrap="wrap" gap={{ base: "4", md: "6" }}>
            {dyorLinks.map((link, i) => (
              <a href={link.href} target="_blank" key={i}>
                <Image
                  src={link.imgSrc}
                  alt={link.alt}
                  width={48}
                  height={48}
                />
              </a>
            ))}
          </Flex>
        </Box>
        <Box borderRadius="2xl" overflow="hidden" pos="relative">
          <Image
            src="/nOGs.png"
            alt="nOGs"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.300"
          overflow="hidden"
          w="100%"
          h="100%"
          position="relative"
          order={{ base: -1, md: 0 }}
          _before={{
            content: '""',
            display: "block",
            paddingTop: "56.25%",
          }}
        >
          <Box
            as="iframe"
            src="https://player.vimeo.com/video/973566244?h=c6cefbe4c3"
            title="Nounspace Video"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Grid>
    </>
  );
};

export default HomePage;
