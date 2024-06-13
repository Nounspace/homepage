import type { Metadata } from "next";

import { Link } from "@chakra-ui/next-js";
import { Box, Text, Grid } from "@chakra-ui/react";
import NavigationSlider from "@/components/pages/space/NavigationSlider";

export const metadata: Metadata = {
  title: "$SPACE Fair Launch",
  description:
    "Join Nounspace, the decentralized social network. Customize your space with fidgets and smart agents. Embrace user control and community building in Web3.",
};

const SpacePage = () => {
  return (
    <>
      <Box mb="4">
        <NavigationSlider activeLink="capital-providers" />
      </Box>
      <Grid
        placeContent="center"
        bgImage="url(./woods.png)"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        p="8"
        overflow="hidden"
        borderRadius="2xl"
        mb="4"
      >
        <Text
          fontSize="2xl"
          fontWeight="700"
          textShadow="0px 4px 4px 0px #00000040"
          color="white"
        >
          $SPACE Fair Launch is LIVE!{" "}
          <Text
            as="a"
            href="/announcement"
            color="blue.300"
            textDecor="underline"
          >
            Read the full announcement 🚀
          </Text>
        </Text>
      </Grid>
    </>
  );
};

export default SpacePage;
