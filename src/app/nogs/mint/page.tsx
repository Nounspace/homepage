'use client';

import { Box, Text, Stack, HStack, VStack, Center } from "@chakra-ui/react";
import NavigationSlider from "@/components/pages/nogs/NavigationSlider";
import Image from "next/image";
import { useEffect } from "react";

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
        <Text mt="4">Scroll down to mint! ↓</Text>
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
      <source src="https://nounspace.mypinata.cloud/ipfs/QmWtLFGCcqVtZFaQse9gTTnaMDRQMkBMvdzmEk9pHXTR3e" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

const MintCard = () => {
    useEffect(() => {
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://mint.highlight.xyz/assets/embed.css';
        document.head.appendChild(link);

        // Load JS
        const script = document.createElement('script');
        script.src = 'https://mint.highlight.xyz/assets/embed.js?v=1';
        script.type = 'module';
        script.crossOrigin = 'true';
        document.body.appendChild(script);

        // Cleanup function to remove the script and stylesheet when the component is unmounted
        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            data-widget="highlight-mint-card"
            data-use-content-as-loading="true"
            data-mint-collection-id="663d2717dffb7b3a490f398f"
        ></div>
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
