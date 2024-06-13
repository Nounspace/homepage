import type { Metadata } from "next";

import { Box } from "@chakra-ui/react";
import NavigationSlider from "@/components/pages/nogs/NavigationSlider";

export const metadata: Metadata = {
  title: "nOGs | Nounspace",
  description: "",
};

const AboutTab = () => {
  return (
    <Box
      as="iframe"
      src="https://paragraph.xyz/@nounspace/nogs"
      width="100%"
      height="100vh"
      frameBorder="0"
      mt={4}
    />
  )
}

const AboutPage = () => {
  return (
    <>
      <NavigationSlider activeLink="about" />
      <AboutTab />
    </>
  );
};

export default AboutPage;