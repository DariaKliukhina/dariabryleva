import { LanguagesTypes } from "@/types";
import { homepageQuery } from "~/sanity/cms-queries";
import { getData } from "~/sanity/sanity-utils";
import { DEFAULT_LOCALE } from "@/navigation";
import { Hero } from "@/components";
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
    mainInfo: { title, description },
  } = data;

  return (
    <>
      <Hero title={title} description={description} mainImage={mainImage} />
    </>
  );
}
