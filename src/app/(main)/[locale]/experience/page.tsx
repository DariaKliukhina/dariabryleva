import { ExperienceList } from "@/components";
import { DEFAULT_LOCALE } from "@/navigation";
import { LanguagesTypes } from "@/types";
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
  return (
    <>
      <ExperienceList list={data?.jobsList} />
    </>
  );
}
