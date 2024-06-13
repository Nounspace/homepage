import type { Metadata } from "next";

import { Box } from "@chakra-ui/react";
import NavigationSlider from "@/components/pages/nogs/NavigationSlider";

export const metadata: Metadata = {
  title: "nOGs | Nounspace",
  description: "",
};

const CollectionTab = () => {
  return (
    <>
      <Box
        as="iframe"
        srcDoc={`
          <link rel="stylesheet" href="https://mint.highlight.xyz/assets/embed.css" />
          <div data-widget="highlight-mint-page" data-mint-collection-id="663d2717dffb7b3a490f398f"></div>
          <script type="module" crossorigin="true" src="https://mint.highlight.xyz/assets/embed.js?v=1"></script>
        `}
        width="100%"
        height="100vh"
        frameBorder="0"
      />
    </>
  )
}

const CollectionPage = () => {
  return (
    <>
      <NavigationSlider activeLink="collection" />
      <CollectionTab />
    </>
  );
};

export default CollectionPage;
