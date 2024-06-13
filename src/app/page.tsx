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

const HomePage = () => {
  return (
    <>
      <Box borderRadius="2xl" border="1px solid" borderColor="gray.300" p="4">
        <Text textStyle="h2">Welcome to Nounspace</Text>
        <Text textStyle="h3" mt="4">
          Your space to create, customize, and explore.
        </Text>
        <Text mt="4">
          Nounspace received a $100k grant from Nouns DAO on April 1st to build
          a nounish Farcaster client. On July 2, the gates will open to v0 of
          Nounspace for all nOGs holders. Mint your nOGs today for free
          Nounspace access for life, and participate in the fair launch to be a
          part of the community-owned future of social media.
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
          <Flex flexWrap="wrap" gap={{ base: "4", md: "8" }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Box
                key={index}
                width="50px"
                height="50px"
                bgColor="purple.500"
                borderRadius="full"
              />
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
