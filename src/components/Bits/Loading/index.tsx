import React from "react";
import { Box, Loader } from "@mantine/core";
import classes from "./Loading.module.css"

export const Loading = () => {
  return (
    <Box className={classes.root}>
      <Loader color="violet" />
    </Box>
  );
};
