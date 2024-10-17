"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./Animation.module.css";
import { Box } from "@mantine/core";

const SPARKLES_NUMBER = 200;
const MAX_DURATION = 45000;
const MIN_DURATION = 30000;

export const Animation = () => {
  const ref = useRef();
  const array = Array(SPARKLES_NUMBER).fill("");

  return (
    <Box className={classes.root} ref={ref}>
      {array.map((item, index) => {
        const size = Math.random() * (4 - 2) + 2;
        const left = Math.random() * 100;
        const duration =
          Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION;
        const delay = Math.random() * 30000;
        return (
          <Box
            key={index}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}ms`,
              animationDelay: `${delay}ms`,
            }}
            className={classes.sparkle}
          ></Box>
        );
      })}
    </Box>
  );
};
