"use client";

import {
  CountdownCircleTimer,
  ColorFormat,
} from "react-countdown-circle-timer";
import { Box, Text, Flex, Grid } from "@chakra-ui/react";

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
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
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
        colors="#FF430F"
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
        colors="#FDC614"
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
        colors="#3A78D5"
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
        colors="#7EA757"
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
