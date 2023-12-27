"use client";

import { Box } from "@mantine/core";
import { RootStyleRegistry } from "../RootStyleRegistry";
import { Header } from "../Blocks/Header";
import { PrimaryContainer } from "../Bits/PrimaryContainer";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RootStyleRegistry>
        <Header />
        <Box component="main">
          <PrimaryContainer>
            <Box className="pageContent">{children}</Box>
          </PrimaryContainer>
        </Box>
      </RootStyleRegistry>
    </>
  );
};
