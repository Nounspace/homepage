"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Grid, Text, Flex } from "@chakra-ui/react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const LINKS = [
  {
    id: "mint",
    label: "Mint",
    href: "/nogs/mint"
  },
  {
    id: "collection",
    label: "Collection",
    href: "/nogs/collection"
  },
  {
    id: "about",
    label: "About",
    href: "/nogs/about"
  }
];

const NavigationSlider = ({ activeLink }: { activeLink: string }) => {
  return (
    <Box
      sx={{
        ".splide__arrow": {
          background: "transparent",
          width: "1rem",
          height: "1rem",
        },
        ".splide__track": {
          padding: "0 2rem",
          maskImage:
            "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%)",
        },
        ".splide__arrow--prev": {
          left: 0,
        },
        ".splide__arrow--next": {
          right: 0,
        },
        ".splide__pagination": {
          display: "none",
        },
      }}
    >
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "slide",
          autoWidth: true,
          perMove: 1,
          drag: "free",
          focus: 3,
          width: "fit-content",
        }}
      >
        {LINKS.map((link, index) => (
          <SplideSlide key={index}>
            <Box px="8" py="2">
              <Link
                href={link.href}
                fontSize="lg"
                fontWeight={activeLink === link.id ? "700" : "400"}
                textDecor="none"
                position="relative"
                _hover={{
                  textDecor: "none",
                }}
                _after={{
                  content: `""`,
                  position: "absolute",
                  bottom: "-6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "16px",
                  borderRadius: "6px",
                  height: "4px",
                  background:
                    activeLink === link.id ? "green.300" : "transparent",
                }}
              >
                {link.label}
              </Link>
            </Box>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

export default NavigationSlider;
