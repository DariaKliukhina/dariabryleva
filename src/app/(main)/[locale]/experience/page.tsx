import { experienceQuery } from "~/sanity/cms-queries";
import { getData } from "~/sanity/sanity-utils";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Experience({ params: { locale } }) {
  const data = await getData(experienceQuery, { lang: locale });
  console.log(data);

  return <>test</>;
}
