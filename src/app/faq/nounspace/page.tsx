"use client";
import CollapsibleFaqs from "@/components/pages/faq/CollapsibleFaqs";
import NavigationSlider from "@/components/pages/faq/NavigationSlider";

const questions = [
  {
    question: "What is Nounspace?",
    answer:
      "Nounspace is a customizable social media platform built on the Farcaster protocol. It allows users to create profiles, customize their spaces with themes and fidgets (miniature applications), explore a diverse spectrum of bespoke spaces, and participate in community-governance to shape the future of social media.",
  },
  {
    question: "What is the Nounspace Fair Launch?",
    answer:
      "The Nounspace Fair Launch is a decentralized event where participants can deposit their stETH and earn $SPACE. These tokens provide governance rights within the Nounspace ecosystem, a new social media platform built on the Farcaster protocol.",
  },
  {
    question: "When does Nounspace launch?",
    answer:
      "On July 2 at 1:11pm UTC, Nounspace will launch. Anyone with an internet connection will be able to visit the space of any farcaster user, and all nOGs holders will have access to customize their space and homebase.",
  },
  {
    question: "What are $SPACE tokens?",
    answer:
      "$SPACE tokens are governance tokens earned through the Nounspace Fair Launch. They provide holders with voting rights and a say in the governance and future direction of the Nounspace platform. Governance is the core utility of $SPACE. From there, the community can extend the powers of $SPACE infinitely.",
  },
  {
    question: "What are nOGs?",
    answer:
      "nOGs are Nounspace OG NFTs. These NFTs feature hand-drawn frames by @latsko.eth, masked over 1,011 different pieces of CC0 artwork and photography. Minting nOGs grants the earliest access to customize your space on Nounspace and free premium access for life.",
  },
];

const FaqPage = () => {
  return (
    <>
      <NavigationSlider activeLink="nounspace" />
      <CollapsibleFaqs questions={questions} />
    </>
  );
};

export default FaqPage;
