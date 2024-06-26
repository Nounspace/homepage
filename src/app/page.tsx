import type { Metadata } from "next";

import Image from "next/image";
import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import ToDos from "@/components/pages/home/ToDos";
import Timer from "@/components/pages/home/Timer";

export const metadata: Metadata = {
  title:
    "Welcome to Nounspace - Your Decentralized, Customizable Social Network",
  description:
    "Join Nounspace, the decentralized social network. Customize your space with fidgets and smart agents. Embrace user control and community building in Web3.",
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
    imgSrc: "/dune-logo.png",
    alt: "Dune Logo",
    href: "https://dune.com/albitrage/nounspace",
  },
  {
    imgSrc: "/toms-head.png",
    alt: "Nounspace Tom",
    href: "https://warpcast.com/nounspacetom",
  },
];

const HomePage = () => {
  return (
    <>
      <Box borderRadius="2xl" border="1px solid" borderColor="gray.300" p="4">
        <Text textStyle="h2">Nounspace is not yet supported on mobile</Text>
        <Text textStyle="h3" mt="4">
          Stay tuned for native iOS and Android apps, and come back on desktop in the meantime.
        </Text>
        <Text mt="4">
         Fear not, not all hope for mobile users is lost! You can still learn about Nounspace, participate in the fair launch by depositing stETH, and/or mint nOGs, which give you access to customize your space and homebase plus free nounspace access.
        </Text>
      </Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "32% 1fr" }}
        gap={{ base: "4", md: "8" }}
        mt={{ base: "4", md: "8" }}
      >
        <Box borderRadius="2xl" border="1px solid" borderColor="gray.300" p="4">
          <Text textStyle="h2" mb="4">
            Nounspace to-do’s:
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
          overflow="hidden"
          bgImage="url(./space-bg.png)"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="110%"
          display="grid"
          placeContent="center"
          order={{ base: -1, md: 0 }}
        >
          <Timer />
        </Box>
      </Grid>
    </>
  );
};

export default HomePage;
