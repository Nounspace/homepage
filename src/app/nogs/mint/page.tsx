import type { Metadata } from "next";

import { Box, Text, Stack, HStack, VStack, Center } from "@chakra-ui/react";
import NavigationSlider from "@/components/pages/nogs/NavigationSlider";
import Image from "next/image";

export const metadata: Metadata = {
  title: "nOGs | Nounspace",
  description: "",
};

const InfoCard = () => {
  return (
    <>
      <Box borderRadius="2xl" border="1px solid" borderColor="gray.300" p="4">
        <Text textStyle="h2">Introducing nOGs</Text>
        <Text textStyle="h3" mt="4">
          Your portal to the onchain universe
        </Text>
        <Text mt="4">Supply: 11,111</Text>
        <Text>Price: 0.0111 ETH</Text>
        <Text>Primary Benefits:</Text>
        <Text>1. Earliest access to customize your space</Text>
        <Text>2. Free, premium Nounspace access for life</Text>
        <Text>3. Infinite Possibilities</Text>
        <Text mt="4">Mint today with the fidget on the right! →→→</Text>
      </Box>
    </>
  );
};

const NogsGif = () => {
  return (
    <Box
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.300"
      overflow="hidden"
      w="100%"
      h={{ base: "auto", md: "100%" }}
      position="relative"
    >
      <Image
        unoptimized
        src="/nogs-glitchy.gif"
        alt="Glitchy nOGs GIF"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

const NounspaceVideo = () => {
  return (
    <Box
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.300"
      overflow="hidden"
      w="100%"
      h="100%"
      position="relative"
    >
      <video width="100%" height="100%" controls>
        <source
          src="https://file.notion.so/f/f/a627b1bc-d532-4123-8c29-ec2e9f85b186/ee7f5b1b-09e0-47e6-8068-777eddd24b29/Nounspace_v2.mp4?id=6bba813a-b76b-4122-9056-c4a2605351ab&table=block&spaceId=a627b1bc-d532-4123-8c29-ec2e9f85b186&expirationTimestamp=1718402400000&signature=hx5djSMPf0JFrCfw794WS20L6cTqdfoe-3G4_mjyaQ4&downloadName=Nounspace+v2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

const MintCard = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      minWidth="360px"
      dangerouslySetInnerHTML={{
        __html: `
          <link rel="stylesheet" href="https://mint.highlight.xyz/assets/embed.css" />
          <div data-widget="highlight-mint-card" data-mint-collection-id="663d2717dffb7b3a490f398f"></div>
          <script type="module" crossorigin="true" src="https://mint.highlight.xyz/assets/embed.js?v=1"></script>
        `,
      }}
    />
  );
};

const MintTab = () => {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        align="stretch"
        spacing={6}
        mt={4}
      >
        <VStack align="stretch" spacing={6}>
          <InfoCard />
          <HStack align="stretch" spacing={6}>
            <NogsGif />
            <NounspaceVideo />
          </HStack>
        </VStack>
        <Center alignSelf="center">
          <MintCard />
        </Center>
      </Stack>
    </>
  );
};

const MintPage = () => {
  return (
    <>
      <NavigationSlider activeLink="mint" />
      <MintTab />
    </>
  );
};

export default MintPage;
