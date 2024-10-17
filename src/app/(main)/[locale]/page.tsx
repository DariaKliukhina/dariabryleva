import { LanguagesTypes } from "@/types";
import { homepageQuery } from "~/sanity/cms-queries";
import { getData } from "~/sanity/sanity-utils";
import { DEFAULT_LOCALE } from "@/navigation";
import {
  Animation,
  ContactsSection,
  ContentContainer,
  ExperiencePreview,
  Hero,
  LeaveReview,
} from "@/components";
import { Box } from "@mantine/core";
import classes from "./page.module.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageParams = {
  locale: LanguagesTypes;
};

export default async function HomePage({
  params: { locale },
}: {
  params: PageParams;
}) {
  const data = await getData(homepageQuery, { lang: locale || DEFAULT_LOCALE });

  if (!data?.mainInfo) return <>no data</>;
  const {
    mainImage,
    reviewMessage,
    mainInfo: { title, description, subtitle },
    experience: { jobsList },
  } = data;

  return (
    <>
      <Box className={classes.wrapper}>
        <Box className={classes.animationWrapper}>
          <Animation />
        </Box>
        <ContentContainer>
          <Hero
            title={title}
            subtitle={subtitle}
            description={description}
            mainImage={mainImage}
          />
        </ContentContainer>
      </Box>
      <ContentContainer>
        <>
          <ExperiencePreview list={jobsList} locale={locale} />
          <LeaveReview description={reviewMessage} />
          <ContactsSection />
        </>
      </ContentContainer>
    </>
  );
}
