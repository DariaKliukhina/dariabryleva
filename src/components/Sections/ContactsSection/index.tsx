import { ContactsWrapper } from "@/components/Blocks/ContactsWrapper";
import { useTranslations } from "next-intl";

export const ContactsSection = () => {
  const t = useTranslations("Contacts");

  const data = {
    name: t("name"),
    namePlaceholder: t("namePlaceholder"),
    nameError: t("nameError"),
    email: t("email"),
    emailPlaceholder: t("emailPlaceholder"),
    emailError: t("emailError"),
    message: t("message"),
    messagePlaceholder: t("messagePlaceholder"),
    messageError: t("messageError"),
    submit: t("submit"),
    title: t("title"),
    success: t("success"),
  };

  return <ContactsWrapper data={data} />;
};
