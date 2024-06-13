'use client'
import React from "react";
import { Box, Collapse, Flex } from "@chakra-ui/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState } from "react";

export type FaqQuestion = {
    question: string;
    answer: string;
}

export type CollapsibleFaqsProps = {
    questions: FaqQuestion[];
}

const CollapsibleFaqs: React.FC<CollapsibleFaqsProps> = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box borderRadius="2xl" border="1px solid" borderColor="gray.300" p="4" bg="gray.100" mt="4">
      <Flex direction="column" border="1px solid" borderColor="gray.300" borderRadius="lg" overflow="hidden">
        {questions.map((faq, index) => (
          <Box
            key={index}
            borderBottom="1px"
            borderColor="gray.200"
            p={3}
            bg="white"
            onClick={() => handleToggle(index)}
            cursor="pointer"
          >
            <Flex justify="space-between" align="center">
              <Box flex="1">{faq.question}</Box>
              {openIndex === index ? <MdExpandLess /> : <MdExpandMore />}
            </Flex>
            <Collapse in={openIndex === index} animateOpacity>
              <Box p={3} mt={2} borderRadius="lg" bg="gray.100">
                {faq.answer}
              </Box>
            </Collapse>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CollapsibleFaqs;
