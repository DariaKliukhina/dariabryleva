import { Box, Center, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import classes from "./NotFoundSection.module.css";

export const NotFoundSection = () => {
  return (
    <Box className={classes.root}>
      <Center>
        <Stack>
          <Text>Page Not Found</Text>
          <Link href={"/"}>Go to the Homepage</Link>
        </Stack>
      </Center>
    </Box>
  );
};
