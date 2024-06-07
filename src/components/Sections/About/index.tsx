import { ActionBlock } from "@/components";
import { ProseableText } from "@/components/Blocks/PortableText";
import { Box } from "@mantine/core";
import React from "react";
import { TypedObject } from "sanity";

type AboutSectionProps = {
  content: any[];
  githubLinkLabel: string;
  githubLink: string;
};

export const AboutSection = ({ content, githubLinkLabel, githubLink }: AboutSectionProps) => {

  return (
    <Box>
      <ActionBlock description={content} buttonLabel={githubLinkLabel} href="https://github.com/DariaKliukhina/dariabryleva" target="_blank" />
    </Box>
  );
};
