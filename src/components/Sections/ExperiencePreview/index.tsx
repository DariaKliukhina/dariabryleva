import React from "react";
import { LanguagesTypes, PositionRaw } from "@/types";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components";
import { PreviewCarousel } from "@/components/Blocks/PreviewCarousel";

type ExperiencePreviewProps = {
  list: PositionRaw[];
  locale: LanguagesTypes;
};
export const ExperiencePreview = ({
  list = [],
  locale,
}: ExperiencePreviewProps) => {
  const t = useTranslations("Index");
  const locales = { present: t("present") };

  return (
    <SectionWrapper title={t("experience")} link="/experience">
      <PreviewCarousel list={list} locale={locale} locales={locales} />
    </SectionWrapper>
  );
};
