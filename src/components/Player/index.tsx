"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { LiaVolumeUpSolid, LiaVolumeMuteSolid } from "react-icons/lia";

const Player = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio("./Nounish_Lofi_Radio_-_61224_11.19_PM.mp3"));
  }, []);

  const togglePlay = () => {
    if (audio === null) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Flex
      borderRadius={{ base: "full", md: "lg" }}
      border="1px solid"
      borderColor="gray.200"
      alignItems="center"
    >
      <Box
        overflow="hidden"
        borderTopLeftRadius="lg"
        borderBottomLeftRadius="lg"
        borderTopRightRadius={{ base: "lg", md: "0" }}
        borderBottomRightRadius={{ base: "lg", md: "0" }}
        flexShrink={0}
        width={{ base: "30px", md: "auto" }}
        height={{ base: "30px", md: "auto" }}
        ml={{ base: "2", md: "auto" }}
      >
        <Image src="/player-poster.png" alt="poster" width="74" height="74" />
      </Box>
      <Flex alignItems="center" p={{ base: "1", md: "2" }} gap="2">
        <Box>
          <Text
            m="0"
            fontWeight="bold"
            fontSize="xs"
            display={{ base: "none", md: "block" }}
            noOfLines={2}
          >
            All Day, Everyday, Forever: A Nou...
          </Text>
          <Text color="gray.500" fontWeight="semibold" fontSize="xxs" m="0">
            NounsTube
          </Text>
        </Box>
        <IconButton
          onClick={togglePlay}
          aria-label="Play/Pause"
          size="sm"
          borderRadius="full"
          boxShadow="0px 0px 8px 0px #0000001F"
          bgColor="gray.300"
          icon={
            isPlaying ? (
              <Icon
                as={LiaVolumeUpSolid}
                color="gray.500"
                width="6"
                height="6"
              />
            ) : (
              <Icon
                as={LiaVolumeMuteSolid}
                color="gray.500"
                width="6"
                height="6"
              />
            )
          }
        />
      </Flex>
    </Flex>
  );
};

export default Player;
