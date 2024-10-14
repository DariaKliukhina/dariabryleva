import { ContactsSection, FullPageWrapper } from "@/components";
import { LanguagesTypes } from "@/types";

type PageParams = {
  locale: LanguagesTypes;
};

export default async function ContactsPage({
  params: { locale },
}: {
  params: PageParams;
}) {
  return (
    <FullPageWrapper>
      <ContactsSection />
    </FullPageWrapper>
  );
}
