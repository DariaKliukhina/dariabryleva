
import { homepageQuery } from "~/cms-queries/homepage";
import { getData } from "~/sanity/sanity-utils";


export default async function Home() {
  const data = await getData(homepageQuery, { lang: "ru" });

  if (!data) return <>no data</>;
  const { title, description } = data;

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}
