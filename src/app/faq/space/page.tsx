'use client'
import CollapsibleFaqs from "@/components/pages/faq/CollapsibleFaqs";
import NavigationSlider from "@/components/pages/faq/NavigationSlider";

const questions = [
  {
    question: "What is Nounspace?",
    answer: "asdf",
  },
  {
    question: "How do I join Nounspace?",
    answer: "asdf",
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
