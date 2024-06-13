import type { Metadata } from "next";

import { Box } from "@chakra-ui/react";
import NavigationSlider from "@/components/pages/nogs/NavigationSlider";

export const metadata: Metadata = {
  title: "nOGs | Nounspace",
  description: "",
};

const AboutTab = () => {
  return (
    <>
    </>
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