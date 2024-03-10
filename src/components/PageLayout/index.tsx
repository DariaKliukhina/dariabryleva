"use client";

import { Box } from "@mantine/core";
import { RootStyleRegistry } from "../RootStyleRegistry";
import { Header } from "../Blocks/Header";
import { PrimaryContainer } from "../Bits/PrimaryContainer";
import { LanguagesTypes } from "@/types";

export const PageLayout = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: LanguagesTypes;
}) => {
  return (
    <>
      <RootStyleRegistry>
        <Header locale={locale} />
        <Box component="main">
          <PrimaryContainer>
            <Box className="pageContent">{children}</Box>
          </PrimaryContainer>
        </Box>
      </RootStyleRegistry>
    </>
  );
};
