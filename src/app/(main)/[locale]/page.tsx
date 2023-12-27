import { homepageQuery } from "~/sanity/cms-queries/homepage";
import { getData } from "~/sanity/sanity-utils";

export default async function Home({ params: { locale } }) {
  const data = await getData(homepageQuery, { lang: locale });

  console.log("locale", locale);
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
