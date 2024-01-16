import { ExperienceList } from "@/components";
import { LanguagesTypes } from "@/types";
import { DEFAULT_LOCALE } from "@/utils";
import { experienceQuery } from "~/sanity/cms-queries";
import { getData } from "~/sanity/sanity-utils";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageParams = {
  locale: LanguagesTypes;
};

export default async function Experience({
  params: { locale },
}: {
  params: PageParams;
}) {
  const data = await getData(experienceQuery, { lang: locale || DEFAULT_LOCALE });
  console.log(data.jobsList);

  return (
    <>
      <ExperienceList list={data?.jobsList} />
    </>
  );
}
