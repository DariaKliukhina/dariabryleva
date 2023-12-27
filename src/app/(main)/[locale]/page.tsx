import { homepageQuery } from "~/sanity/cms-queries";
import { getData } from "~/sanity/sanity-utils";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home({ params: { locale } }) {
  const data = await getData(homepageQuery, { lang: locale });

  if (!data) return <>no data</>;
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
