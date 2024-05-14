import { AboutSection } from "@/components";
import { DEFAULT_LOCALE } from "@/navigation";
import { LanguagesTypes } from "@/types";
import { aboutQuery } from "~/sanity/cms-queries/about";
import { getData } from "~/sanity/sanity-utils";

type PageParams = {
  locale: LanguagesTypes;
};

export default async function About({
  params: { locale },
}: {
  params: PageParams;
}) {
  const data = await getData(aboutQuery, {
    lang: locale || DEFAULT_LOCALE,
  });

  return <AboutSection {...data} />;
}
