import { LanguagesTypes } from "@/types";
import { homepageQuery } from "~/sanity/cms-queries";
import { getData } from "~/sanity/sanity-utils";
import { DEFAULT_LOCALE } from "@/navigation";
import { ExperiencePreview, Hero, LeaveReview } from "@/components";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageParams = {
  locale: LanguagesTypes;
};

export default async function Home({
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
      <Hero
        title={title}
        subtitle={subtitle}
        description={description}
        mainImage={mainImage}
      />
      <ExperiencePreview list={jobsList} locale={locale} />
      <LeaveReview description={reviewMessage} />
    </>
  );
}
