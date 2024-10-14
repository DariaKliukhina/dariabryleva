import { ActionBlock } from "@/components";
import { Box } from "@mantine/core";
import React from "react";

type AboutSectionProps = {
  content: any[];
  githubLinkLabel: string;
  githubLink: string;
};

const LINK = "https://github.com/DariaKliukhina/dariabryleva";

export const AboutSection = ({
  content,
  githubLinkLabel,
  githubLink,
}: AboutSectionProps) => {
  return (
    <ActionBlock
      description={content}
      buttonLabel={githubLinkLabel}
      href={LINK}
      target="_blank"
    />
  );
};
