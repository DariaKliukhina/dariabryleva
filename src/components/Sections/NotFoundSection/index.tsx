import { Box, Center, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const NotFoundSection = () => {
  return (
    <Box>
      <Center>
        <Stack>
          <Text>Page Not Found</Text>
          <Link href={"/"}>Go to the Homepage</Link>
        </Stack>
      </Center>
    </Box>
  );
};
