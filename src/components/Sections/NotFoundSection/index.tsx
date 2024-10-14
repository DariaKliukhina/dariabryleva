import { Box, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const NotFoundSection = () => {
  return (
    <Stack align="center" justify="center">
      <Text>Page Not Found</Text>
      <Link href={"/"}>Go to the Homepage</Link>
    </Stack>
  );
};
