"use client";
import CollapsibleFaqs from "@/components/pages/faq/CollapsibleFaqs";
import NavigationSlider from "@/components/pages/faq/NavigationSlider";

const questions = [
  {
    question: "What is Nounspace?",

    answer:
      "[Nounspace](https://nounspace.com) is a customizable social media platform built on [Farcaster](https://docs.farcaster.xyz/), a sufficiently decentralized social network. It allows users to create profile and dashboard spaces, customize their spaces with themes and fidgets (mini apps), explore customized spaces, and participate in community-governance to shape the future of social.",
  },
  {
    question: "Who can use Nounspace? Do I need a Nouns NFT?",
    answer:
      "Anyone can use Nounspace! No NFT required. All you need is a wallet and a Farcaster account.",
  },
  {
    question: "What is Nounspace's relationship to Nouns?",
    answer:
      "Nounspace was initially [funded by Nouns DAO](https://prop.house/0x767a3bdf2aa3b3201b794927a997fcf4e50d4702/21) and is focused on the Nouns community and ecosystem. However, we're working on enabling any community to easily deploy their own whitelabeled version of Nounspace. To be notified when this is live, please [fill out this form](https://app.deform.cc/form/625acfaf-5d14-4d48-af5f-c8cf521342ef/).",
  },
  {
    question: "What are $SPACE tokens?",
    answer:
      "[$SPACE](https://basescan.org/address/0x48C6740BcF807d6C47C864FaEEA15Ed4dA3910Ab) tokens are governance token for Nounspace and can be earned through the Nounspace Fair Launch. They provide holders with voting rights and a say in the governance and future direction of the Nounspace platform. Governance is the core utility of $SPACE. From there, the community can extend the powers of $SPACE infinitely. Learn more about $SPACE and participate in the fair launch on the [$SPACE token space](https://www.nounspace.com/t/base/0x48C6740BcF807d6C47C864FaEEA15Ed4dA3910Ab/Profile).",
  },
  {
    question: "What is the Nounspace Fair Launch?",
    answer:
      "The Nounspace Fair Launch is a decentralized event where participants can deposit their stETH and earn $SPACE. These tokens provide governance rights within the Nounspace ecosystem.",
  },
  {
    question: "What are nOGs?",
    answer:
      "nOGs are Nounspace OG NFTs. These NFTs feature hand-drawn frames by @latsko.eth, masked over 1,011 different pieces of CC0 artwork and photography. [Minting nOGs](https://highlight.xyz/mint/base:0xD094D5D45c06c1581f5f429462eE7cCe72215616) grants early access to new features and free premium access for life.",

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
