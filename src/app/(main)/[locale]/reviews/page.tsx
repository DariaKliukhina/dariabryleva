import { LanguagesTypes } from "@/types";

type PageParams = {
  locale: LanguagesTypes;
};

export default async function Reviews({
  params: { locale },
}: {
  params: PageParams;
}) {
  return <>Reviews</>;
}
