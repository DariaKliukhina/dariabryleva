"use client";

import { Box } from "@mantine/core";
import { RootStyleRegistry } from "../RootStyleRegistry";
import { PrimaryButton } from "../Button";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RootStyleRegistry>
        <Box component="main" className="pageContent">
          <PrimaryButton label={"test"} />
          {children}
        </Box>
      </RootStyleRegistry>
    </>
  );
};
