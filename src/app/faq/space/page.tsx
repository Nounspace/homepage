"use client";
import CollapsibleFaqs from "@/components/pages/faq/CollapsibleFaqs";
import NavigationSlider from "@/components/pages/faq/NavigationSlider";

const questions = [
  {
    question: "What is the Nounspace Fair Launch?",
    answer:
      "The Nounspace Fair Launch is a decentralized event where participants can deposit their stETH and earn $SPACE. These tokens provide governance rights within the Nounspace ecosystem, a new social platform built on the Farcaster protocol.",
  },
  {
    question: "How do I participate in the Nounspace Fair Launch?",
    answer:
      "To participate, you need to stake ETH by converting it to stETH via [Lido](https://stake.lido.fi/). Next, deposit your stETH into the Nounspace contract on the Ethereum mainnet through the [$SPACE dashboard](https://space.nounspace.com).",
  },
  {
    question: "Do I need to have stETH to participate?",
    answer:
      "Yes, you need stETH to participate. If you don't have stETH, you can convert your ETH to stETH using [Lido](https://stake.lido.fi/) before depositing it into the Nounspace contract.",
  },
  {
    question: "Where can I find the Nounspace staking dashboard?",
    answer:
      "The [$SPACE dashboard](https://space.nounspace.com) is available on the Nounspace website. It provides instructions and a user-friendly interface to guide you through the staking process.",
  },
  {
    question: "What is the minimum amount of stETH required to participate?",
    answer: "You must stake at least 0.011 stETH per deposit. There is no max.",
  },
];

const FaqPage = () => {
  return (
    <>
      <NavigationSlider activeLink="space" />
      <CollapsibleFaqs questions={questions} />
    </>
  );
};

export default FaqPage;
