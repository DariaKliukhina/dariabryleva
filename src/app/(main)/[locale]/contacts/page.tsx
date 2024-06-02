import { ContactsSection } from "@/components";
import { LanguagesTypes } from "@/types";

type PageParams = {
  locale: LanguagesTypes;
};

export default async function ContactsPage({
  params: { locale },
}: {
  params: PageParams;
}) {
  return <ContactsSection />;
}
