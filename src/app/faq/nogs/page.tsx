"use client";
import CollapsibleFaqs from "@/components/pages/faq/CollapsibleFaqs";
import NavigationSlider from "@/components/pages/faq/NavigationSlider";

const questions = [
  {
    question: "What are nOGs?",
    answer:
      "[nOGs](https://highlight.xyz/mint/base:0xD094D5D45c06c1581f5f429462eE7cCe72215616) are Nounspace OG NFTs. These NFTs feature hand-drawn frames by @latsko.eth, masked over 1011 different pieces of CC0 artwork and photography. Minting nOGs grants earliest access to new features and includes free premium access for life.",
  },
  {
    question: "How much do nOGs cost to mint?",
    answer:
      "0.0111 ETH plus a 0.0008 ETH protocol fee, or 0.0119 ETH in total.",
  },
  {
    question: "What benefits do nOG holders get?",
    answer:
      "nOGs holders receive the earliest access to customize their space on Nounspace starting July 2nd. Additionally, they get free premium access for life, ensuring they can fully utilize all features and customizations available on the platform to their fullest extent.",
  },
  {
    question: "Why should I mint nOGs?",
    answer:
      "Minting nOGs not only provides you with early access and premium features on Nounspace but also makes you part of an exclusive community. You'll have the opportunity to shape the development and future of Nounspace, and enjoy a unique and highly customizable social media experience.",
  },
];

const FaqPage = () => {
  return (
    <>
      <NavigationSlider activeLink="nogs" />
      <CollapsibleFaqs questions={questions} />
    </>
  );
};

export default FaqPage;
