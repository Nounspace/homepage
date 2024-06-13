import type { Metadata } from "next";

const websiteUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.nounspace.com/"
    : "http://localhost:3000";

export const globalMetadata: Metadata = {
  metadataBase: new URL(websiteUrl),
  title: {
    template: "%s | Nounspace",
    default: "Nounspace",
  },
  description:
    "Join Nounspace, the decentralized social network. Customize your space with fidgets and smart agents. Embrace user control and community building in Web3.",
  openGraph: {
    title: "Nounspace",
    description:
      "Join Nounspace, the decentralized social network. Customize your space with fidgets and smart agents. Embrace user control and community building in Web3.",
    url: websiteUrl,
    siteName: "Nounspace",
    images: [
      {
        url: `${websiteUrl}/opengraph-image.png`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
