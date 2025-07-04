"use client";
import CollapsibleFaqs from "@/components/pages/faq/CollapsibleFaqs";
import NavigationSlider from "@/components/pages/faq/NavigationSlider";

const questions = [
  {
    question: "What is the $SPACE contract address?",
    answer:
      "[0x48C6740BcF807d6C47C864FaEEA15Ed4dA3910Ab](https://basescan.org/address/0x48C6740BcF807d6C47C864FaEEA15Ed4dA3910Ab) on Base.",
  },
  {
    question: "What is the Nounspace Fair Launch?",
    answer:
      "The Nounspace Fair Launch is a decentralized event where participants can deposit their stETH on Ethereum Mainnet and earn $SPACE on Base. These tokens provide governance rights within the Nounspace ecosystem.",
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
      "The $SPACE dashboard can be found on [space.nounspace.com](https://space.nounspace.com). You can also access the $SPACE fair launch from the [$SPACE Token Space](https://www.nounspace.com/t/base/0x48C6740BcF807d6C47C864FaEEA15Ed4dA3910Ab/Fair%20Launch).",
  },
  {
    question: "What is the minimum amount of stETH required to participate?",
    answer: "You must stake at least 0.011 stETH per deposit. There is no max.",
  },
  {
    question: "Can I withdraw my stETH",
    answer: "Yes, after the lock delay, you can withdraw 100% of the stETH you deposited",
  },
  {
    question: "What happens to the yield generated by deposited stETH?",
    answer: "The yield from deposited stETH is bridged to Base and used by Nounspace DAO to purchase $SPACE, becoming Protocol-Owned Liquidity.",
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
