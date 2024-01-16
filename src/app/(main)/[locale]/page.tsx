import { LanguagesTypes } from "@/types";
import { DEFAULT_LOCALE } from "@/utils";
import { homepageQuery } from "~/sanity/cms-queries";
import { getData } from "~/sanity/sanity-utils";
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
    mainInfo: { title, description },
  } = data;

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}
