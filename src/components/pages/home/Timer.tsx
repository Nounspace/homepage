"use client";

import {
  CountdownCircleTimer,
  ColorFormat,
} from "react-countdown-circle-timer";
import { Box, Text, Grid } from "@chakra-ui/react";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps: {
  isPlaying: boolean;
  size: number;
  strokeWidth: number;
  trailColor: ColorFormat;
} = {
  isPlaying: true,
  size: 95,
  strokeWidth: 4,
  trailColor: "rgba(0, 0, 0, 0)",
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

const renderTime = (dimension: string, time: number) => {
  return (
    <Box textAlign="center">
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        lineHeight="none"
        fontWeight="500"
        color="white"
        m="0"
      >
        {time}
      </Text>
      <Text
        fontSize={{ base: "xxs", md: "xs" }}
        lineHeight="none"
        fontWeight="500"
        color="white"
        textTransform="uppercase"
        m="0"
      >
        {dimension}
      </Text>
    </Box>
  );
};

const Timer = () => {
  // const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const startTime = new Date("2024-04-01T13:11:00Z").getTime() / 1000; // use UNIX timestamp in seconds
  const endTime = new Date("2024-07-02T13:11:00Z").getTime() / 1000; // 1:11pm UTC on July 2, 2024

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      gap="6"
      mx="auto"
      justifyItems="center"
      transform={{ base: "scale(0.65)", md: "scale(1)" }}
    >
      <CountdownCircleTimer
        {...timerProps}
        colors="#13FFD9"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#FF0090"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#FFF22F"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#7EEC3D"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </Grid>
  );
};

export default Timer;
